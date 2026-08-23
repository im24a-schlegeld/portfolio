'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProjectEmbed({ src, title }) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setTimedOut(true);
    }, 7000);

    return () => window.clearTimeout(timeoutRef.current);
  }, [src]);

  const handleLoad = () => {
    window.clearTimeout(timeoutRef.current);
    setLoaded(true);
    setTimedOut(false);
  };

  return (
    <>
      <div className={`embedFallback ${loaded ? 'isHidden' : ''}`}>
        <strong>{title}</strong>
        <span>{timedOut ? 'Vorschau reagiert nicht.' : 'Vorschau wird geladen.'}</span>
        <a href={src} target="_blank" rel="noreferrer">
          Projekt ansehen
        </a>
      </div>
      <iframe
        className={`embedFrame ${loaded ? 'isLoaded' : ''}`}
        src={src}
        title={title}
        loading="lazy"
        onLoad={handleLoad}
      />
      <a className="embedOpenLink" href={src} target="_blank" rel="noreferrer">
        Projekt ansehen
      </a>
    </>
  );
}
