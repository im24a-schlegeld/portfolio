'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { navigationItems } from '../../data/portfolio';
import styles from './SiteHeader.module.css';

export default function SiteHeader({ activeKey, variant = 'default' }) {
  const headerRef = useRef(null);
  const transitionKey = `${variant}:${activeKey ?? ''}`;

  useEffect(() => {
    const isValidDirection = (value) => value === 'left' || value === 'right';
    const isInternalNavigation = window.sessionStorage.getItem('site-header-pending-navigation') === 'true';
    const storedDirection = window.sessionStorage.getItem('site-header-direction');
    const storedSteps = Number(window.sessionStorage.getItem('site-header-steps'));
    headerRef.current?.removeAttribute('data-transition');

    if (!isInternalNavigation) {
      document.documentElement.removeAttribute('data-page-transition');
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.sessionStorage.removeItem('site-header-pending-navigation');
      document.documentElement.removeAttribute('data-page-transition');
      return undefined;
    }

    const direction = isValidDirection(storedDirection) ? storedDirection : 'right';
    const steps = Number.isInteger(storedSteps)
      ? Math.min(navigationItems.length - 1, Math.max(1, storedSteps))
      : 1;
    headerRef.current?.setAttribute('data-direction', direction);
    headerRef.current?.style.setProperty('--road-steps', String(steps));

    let transitionFrame;
    const paintFrame = window.requestAnimationFrame(() => {
      transitionFrame = window.requestAnimationFrame(() => {
        headerRef.current?.setAttribute('data-transition', 'true');
        window.sessionStorage.removeItem('site-header-pending-navigation');
      });
    });

    return () => {
      window.cancelAnimationFrame(paintFrame);
      if (transitionFrame) window.cancelAnimationFrame(transitionFrame);
    };
  }, [transitionKey]);

  const handleNavigation = (event, key) => {
    const isModifiedClick = event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey;

    if (isModifiedClick || key === activeKey) {
      window.sessionStorage.removeItem('site-header-pending-navigation');
      return;
    }

    const currentIndex = navigationItems.findIndex((item) => item.key === activeKey);
    const nextIndex = navigationItems.findIndex((item) => item.key === key);
    const nextDirection = nextIndex >= currentIndex ? 'left' : 'right';
    const steps = Math.max(1, Math.abs(nextIndex - currentIndex));
    document.documentElement.setAttribute('data-page-transition', 'waiting');
    window.sessionStorage.setItem('site-header-direction', nextDirection);
    window.sessionStorage.setItem('site-header-steps', String(steps));
    window.sessionStorage.setItem('site-header-pending-navigation', 'true');
  };

  const finishHeaderTransition = (event) => {
    if (event.target === event.currentTarget) {
      headerRef.current?.removeAttribute('data-transition');
      document.documentElement.setAttribute('data-page-transition', 'revealing');
    }
  };

  const finishPageReveal = (event) => {
    if (
      event.target === event.currentTarget
      && document.documentElement.getAttribute('data-page-transition') === 'revealing'
    ) {
      document.documentElement.removeAttribute('data-page-transition');
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.siteHeader} ${variant === 'home' ? styles.siteHeaderHome : ''}`}
        data-site-header="true"
        data-direction="right"
      >
        <div className={styles.siteHeaderInner}>
          <Link className={styles.siteLogo} href="/" onClick={(event) => handleNavigation(event, 'home')}>
            Dario Schlegel
          </Link>

          <nav className={styles.siteNav} aria-label="Hauptnavigation">
            {navigationItems.map((item) => (
              <Link
                className={styles.siteNavLink}
                href={item.href}
                key={item.key}
                aria-current={item.key === activeKey ? 'page' : undefined}
                onClick={(event) => handleNavigation(event, item.key)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className={styles.roadStripeLayer}
          aria-hidden="true"
          onAnimationEnd={finishHeaderTransition}
        />
      </header>
      <div
        className={styles.pageTransitionCurtain}
        aria-hidden="true"
        onAnimationEnd={finishPageReveal}
      />
    </>
  );
}
