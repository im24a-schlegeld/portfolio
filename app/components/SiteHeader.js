'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navigationItems } from '../../data/portfolio';
import styles from './SiteHeader.module.css';

export default function SiteHeader({ activeKey, roadStripes = false, roadTexture = false }) {
  const [direction, setDirection] = useState('left');
  const headerRef = useRef(null);

  useEffect(() => {
    const storedDirection = window.sessionStorage.getItem('site-header-direction');
    if (storedDirection === 'left' || storedDirection === 'right') {
      headerRef.current?.setAttribute('data-direction', storedDirection);
    }

    const frame = window.requestAnimationFrame(() => {
      headerRef.current?.setAttribute('data-transition', 'true');
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleNavigation = (key) => {
    const currentIndex = navigationItems.findIndex((item) => item.key === activeKey);
    const nextIndex = navigationItems.findIndex((item) => item.key === key);
    const nextDirection = nextIndex >= currentIndex ? 'right' : 'left';
    window.sessionStorage.setItem('site-header-direction', nextDirection);
    setDirection(nextDirection);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.siteHeader} ${roadStripes ? styles.siteHeaderRoad : ''} ${roadTexture ? styles.siteHeaderRoadTexture : ''}`}
      data-site-header="true"
      data-direction={direction}
      data-road-stripes={roadStripes ? 'true' : undefined}
    >
      <div className={styles.siteHeaderInner}>
        <Link className={styles.siteLogo} href="/" onClick={() => handleNavigation('home')}>
          Dario Schlegel
        </Link>

        <nav className={styles.siteNav} aria-label="Hauptnavigation">
          {navigationItems.map((item) => (
            <Link
              className={styles.siteNavLink}
              href={item.href}
              key={item.key}
              aria-current={item.key === activeKey ? 'page' : undefined}
              onClick={() => handleNavigation(item.key)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
