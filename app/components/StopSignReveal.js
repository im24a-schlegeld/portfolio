'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function StopSignReveal() {
  const bottomSentinelRef = useRef(null);
  const [showStopSign, setShowStopSign] = useState(false);

  useEffect(() => {
    const sentinel = bottomSentinelRef.current;

    if (!sentinel) return undefined;

    let animationFrame = null;
    let hasRevealed = false;

    const revealAtDocumentEnd = () => {
      animationFrame = null;

      const page = document.documentElement;
      const remainingScroll = page.scrollHeight - (window.scrollY + window.innerHeight);

      // Browser zoom can leave a sub-pixel remainder at the real scroll limit.
      if (!hasRevealed && remainingScroll < 1) {
        hasRevealed = true;
        setShowStopSign(true);
      }
    };

    const checkDocumentEnd = () => {
      if (!hasRevealed && animationFrame === null) {
        animationFrame = window.requestAnimationFrame(revealAtDocumentEnd);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          checkDocumentEnd();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);

    window.addEventListener('scroll', checkDocumentEnd, { passive: true });
    window.addEventListener('resize', checkDocumentEnd);
    checkDocumentEnd();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkDocumentEnd);
      window.removeEventListener('resize', checkDocumentEnd);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      <div className="stopSignWrap" aria-hidden="true">
        <div className={`stopSignMarker${showStopSign ? ' isVisible' : ''}`}>
          <Image
            className="stopSignImage"
            src="/Stop_sign.png"
            alt=""
            width={608}
            height={608}
          />
          <div className="stopSignPole" />
        </div>
      </div>
      <div ref={bottomSentinelRef} className="bottomSentinel" aria-hidden="true" />
    </>
  );
}
