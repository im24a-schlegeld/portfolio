'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { navigationItems } from '../../data/portfolio';
import styles from './SiteHeader.module.css';

export default function SiteHeader({ activeKey, variant = 'default' }) {
  const headerRef = useRef(null);
  const lastTransitionKeyRef = useRef(null);
  const transitionKey = `${variant}:${activeKey ?? ''}`;

  const restartHeaderTransition = () => {
    headerRef.current?.removeAttribute('data-transition');
    window.requestAnimationFrame(() => {
      headerRef.current?.setAttribute('data-transition', 'true');
    });
  };

  useEffect(() => {
    if (lastTransitionKeyRef.current === transitionKey) return undefined;
    lastTransitionKeyRef.current = transitionKey;

    const isValidDirection = (value) => value === 'left' || value === 'right';
    const isInternalNavigation = window.sessionStorage.getItem('site-header-pending-navigation') === 'true';
    const storedDirection = window.sessionStorage.getItem('site-header-direction');
    const direction = isInternalNavigation && isValidDirection(storedDirection)
      ? storedDirection
      : 'right';

    headerRef.current?.setAttribute('data-direction', direction);
    headerRef.current?.removeAttribute('data-transition');
    window.sessionStorage.removeItem('site-header-pending-navigation');

    const frame = window.requestAnimationFrame(() => {
      headerRef.current?.setAttribute('data-transition', 'true');
    });

    return () => window.cancelAnimationFrame(frame);
  }, [transitionKey]);

  const handleNavigation = (key) => {
    const currentIndex = navigationItems.findIndex((item) => item.key === activeKey);
    const nextIndex = navigationItems.findIndex((item) => item.key === key);
    const nextDirection = nextIndex >= currentIndex ? 'right' : 'left';
    window.sessionStorage.setItem('site-header-direction', nextDirection);
    window.sessionStorage.setItem('site-header-pending-navigation', 'true');
    headerRef.current?.setAttribute('data-direction', nextDirection);
    restartHeaderTransition();
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
