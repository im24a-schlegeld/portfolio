'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navigationItems } from '../../data/portfolio';
import styles from './SiteHeader.module.css';

const ROAD_DASH = 54;
const ROAD_GAP = 68;
const ROAD_CYCLE = ROAD_DASH + ROAD_GAP;

export default function SiteHeader({ activeKey, variant = 'default' }) {
  const headerRef = useRef(null);
  const lastTransitionKeyRef = useRef(null);
  const [stripeOffsets, setStripeOffsets] = useState([]);
  const transitionKey = `${variant}:${activeKey ?? ''}`;

  const restartHeaderTransition = () => {
    headerRef.current?.removeAttribute('data-transition');
    window.requestAnimationFrame(() => {
      headerRef.current?.setAttribute('data-transition', 'true');
    });
  };

  useEffect(() => {
    const updateStripeOffsets = () => {
      const headerWidth = headerRef.current?.clientWidth ?? window.innerWidth;
      const halfViewport = headerWidth / 2;
      const halfDash = ROAD_DASH / 2;
      const offsets = [];

      if (headerWidth <= 700) {
        for (let left = ROAD_GAP / 2; left + ROAD_DASH <= headerWidth; left += ROAD_CYCLE) {
          offsets.push(left + halfDash - halfViewport);
        }

        setStripeOffsets(offsets);
        return;
      }

      for (let index = 0; ; index += 1) {
        const dashCenter = ROAD_GAP / 2 + halfDash + index * ROAD_CYCLE;
        const visibleWidthAtEdge = halfViewport - (dashCenter - halfDash);

        if (visibleWidthAtEdge < ROAD_DASH) break;

        offsets.push(dashCenter, -dashCenter);
      }

      setStripeOffsets(offsets);
    };

    updateStripeOffsets();
    window.addEventListener('resize', updateStripeOffsets);

    return () => window.removeEventListener('resize', updateStripeOffsets);
  }, []);

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

      <div className={styles.roadStripeLayer} aria-hidden="true">
        {stripeOffsets.map((offset) => (
          <span
            className={styles.roadStripe}
            key={offset}
            style={{ '--stripe-offset': `${offset}px` }}
          />
        ))}
      </div>
    </header>
  );
}
