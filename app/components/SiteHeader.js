'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { navigationItems } from '../../data/portfolio';
import styles from './SiteHeader.module.css';

export default function SiteHeader({ activeKey, variant = 'default' }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const storedDirection = window.sessionStorage.getItem('site-header-direction');
    if (storedDirection === 'left' || storedDirection === 'right') {
      headerRef.current?.setAttribute('data-direction', storedDirection);
    }

    if (variant !== 'home') return undefined;

    const frame = window.requestAnimationFrame(() => {
      headerRef.current?.setAttribute('data-transition', 'true');
    });

    return () => window.cancelAnimationFrame(frame);
  }, [variant]);

  const handleNavigation = (key) => {
    const currentIndex = navigationItems.findIndex((item) => item.key === activeKey);
    const nextIndex = navigationItems.findIndex((item) => item.key === key);
    const nextDirection = nextIndex >= currentIndex ? 'right' : 'left';
    window.sessionStorage.setItem('site-header-direction', nextDirection);
    headerRef.current?.setAttribute('data-direction', nextDirection);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.siteHeader} ${variant === 'home' ? styles.siteHeaderHome : ''}`}
      data-site-header="true"
      data-direction="right"
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
