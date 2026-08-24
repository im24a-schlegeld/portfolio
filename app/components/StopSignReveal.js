'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function StopSignReveal() {
  const bottomSentinelRef = useRef(null);
  const [showStopSign, setShowStopSign] = useState(false);

  useEffect(() => {
    const sentinel = bottomSentinelRef.current;

    if (!sentinel) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStopSign(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
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
