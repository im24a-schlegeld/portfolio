'use client';

import { useEffect, useRef } from 'react';

const SWORD_MODEL_URL = '/about/models/longsword.glb';

// Keep these values unchanged unless the visible sword animation should change.
const SWORD_TRANSFORM = {
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  angle: {
    x: 0.2,
    y: -0.18,
    z: 0.48,
  },
};

const SWORD_SCROLL_REACTION = {
  amount: 0.5,
  xAngle: 0.75,
  yAngle: 0.42,
  zAngle: -0.55,
  xPosition: 0,
  yPosition: 0,
};

export default function SwordModel({
  className = '',
  scrollProgressRef = null,
  mediaQuery = 'all',
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const media = window.matchMedia(mediaQuery);
    let generation = 0;
    let activeCleanup;

    const stop = () => {
      generation += 1;
      activeCleanup?.();
      activeCleanup = undefined;
      delete mount.dataset.modelLoaded;
      delete mount.dataset.modelError;
    };

    const start = async () => {
      const ownGeneration = generation;
      const [THREE, { GLTFLoader }] = await Promise.all([
        import('three'),
        import('three/examples/jsm/loaders/GLTFLoader.js'),
      ]);

      if (ownGeneration !== generation || !media.matches || !mount.isConnected) {
        return;
      }

      let animationFrameId;
      let modelRoot;
      let isDisposed = false;
      let isInViewport = false;
      let currentScrollProgress = scrollProgressRef?.current ?? 0;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
      camera.position.set(0, 0.08, 7.2);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.domElement.className = 'swordCanvas';
      renderer.domElement.setAttribute('aria-hidden', 'true');
      mount.appendChild(renderer.domElement);

      const swordGroup = new THREE.Group();
      swordGroup.position.set(
        SWORD_TRANSFORM.position.x,
        SWORD_TRANSFORM.position.y,
        SWORD_TRANSFORM.position.z,
      );
      scene.add(swordGroup);

      const fillLight = new THREE.HemisphereLight(0xf4f0e9, 0x141414, 3.3);
      const keyLight = new THREE.DirectionalLight(0xfff3df, 3.2);
      keyLight.position.set(3.6, 5.4, 6.2);
      const rimLight = new THREE.DirectionalLight(0xaebed6, 2.4);
      rimLight.position.set(-4.4, 0.5, 4.8);
      const glintLight = new THREE.PointLight(0xffffff, 2.2, 9);
      glintLight.position.set(2.4, 0.5, 2.2);
      scene.add(fillLight, keyLight, rimLight, glintLight);

      const resizeRenderer = () => {
        const width = mount.clientWidth;
        const height = mount.clientHeight;

        if (!width || !height) return;

        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const resizeObserver = new ResizeObserver(resizeRenderer);
      resizeObserver.observe(mount);
      resizeRenderer();

      const loader = new GLTFLoader();
      loader.load(
        SWORD_MODEL_URL,
        (gltf) => {
          if (isDisposed) return;

          modelRoot = gltf.scene;
          const box = new THREE.Box3().setFromObject(modelRoot);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
          const longestSide = Math.max(size.x, size.y, size.z) || 1;

          modelRoot.position.sub(center);
          modelRoot.scale.setScalar(5.7 / longestSide);

          if (size.y >= size.x && size.y >= size.z) {
            modelRoot.rotation.z = Math.PI / 2;
          } else if (size.z >= size.x && size.z >= size.y) {
            modelRoot.rotation.y = -Math.PI / 2;
          } else {
            modelRoot.rotation.z = Math.PI;
          }

          modelRoot.traverse((object) => {
            if (!object.isMesh) return;

            object.frustumCulled = false;
            const materials = Array.isArray(object.material)
              ? object.material
              : [object.material];

            materials.forEach((material) => {
              if (!material) return;
              material.envMapIntensity = 1.3;
            });
          });

          swordGroup.add(modelRoot);
          mount.dataset.modelLoaded = 'true';
        },
        undefined,
        (error) => {
          if (isDisposed) return;
          mount.dataset.modelError = 'true';
          console.error('Failed to load sword model', error);
        },
      );

      const getElementScrollProgress = () => {
        const rect = mount.getBoundingClientRect();
        const viewportHeight = window.innerHeight || 1;
        const centerY = rect.top + rect.height / 2;
        const rawProgress = (viewportHeight * 0.88 - centerY) / (viewportHeight * 0.72);

        return Math.max(0, Math.min(1, rawProgress));
      };

      const animate = () => {
        animationFrameId = undefined;
        if (isDisposed || document.hidden || !isInViewport) return;

        const targetScrollProgress = scrollProgressRef
          ? scrollProgressRef.current
          : getElementScrollProgress();
        currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.1;

        const scrollTurn = (
          (currentScrollProgress - 0.5) * SWORD_SCROLL_REACTION.amount
        );

        swordGroup.rotation.x = (
          SWORD_TRANSFORM.angle.x + scrollTurn * SWORD_SCROLL_REACTION.xAngle
        );
        swordGroup.rotation.y = (
          SWORD_TRANSFORM.angle.y + scrollTurn * SWORD_SCROLL_REACTION.yAngle
        );
        swordGroup.rotation.z = (
          SWORD_TRANSFORM.angle.z + scrollTurn * SWORD_SCROLL_REACTION.zAngle
        );
        swordGroup.position.x = (
          SWORD_TRANSFORM.position.x
          + scrollTurn * SWORD_SCROLL_REACTION.xPosition
        );
        swordGroup.position.y = (
          SWORD_TRANSFORM.position.y
          + scrollTurn * SWORD_SCROLL_REACTION.yPosition
        );

        glintLight.intensity = 1.9 + currentScrollProgress * 0.55;
        glintLight.position.x = -1.2 + currentScrollProgress * 2.4;
        glintLight.position.y = 0.15 + currentScrollProgress * 0.45;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      const startRendering = () => {
        if (
          animationFrameId
          || isDisposed
          || document.hidden
          || !isInViewport
        ) return;

        animationFrameId = requestAnimationFrame(animate);
      };

      const stopRendering = () => {
        if (!animationFrameId) return;
        cancelAnimationFrame(animationFrameId);
        animationFrameId = undefined;
      };

      const visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          isInViewport = entry.isIntersecting;
          if (isInViewport) startRendering();
          else stopRendering();
        },
        { rootMargin: '120px 0px', threshold: 0 },
      );
      visibilityObserver.observe(mount);

      const handleVisibilityChange = () => {
        if (document.hidden) stopRendering();
        else startRendering();
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      activeCleanup = () => {
        isDisposed = true;
        cancelAnimationFrame(animationFrameId);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        visibilityObserver.disconnect();
        resizeObserver.disconnect();

        scene.traverse((object) => {
          if (!object.isMesh) return;

          object.geometry?.dispose();
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];

          materials.forEach((material) => {
            if (!material) return;

            Object.values(material).forEach((value) => {
              if (value?.isTexture) value.dispose();
            });
            material.dispose();
          });
        });

        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    const syncWithViewport = () => {
      stop();
      if (media.matches) {
        void start();
      }
    };

    syncWithViewport();
    media.addEventListener('change', syncWithViewport);

    return () => {
      media.removeEventListener('change', syncWithViewport);
      stop();
    };
  }, [mediaQuery, scrollProgressRef]);

  return (
    <div ref={mountRef} className={className} aria-hidden="true">
      <span className="swordLoadingIndicator" />
    </div>
  );
}
