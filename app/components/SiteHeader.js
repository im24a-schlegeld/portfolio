'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigationItems } from '../../data/portfolio';
import styles from './SiteHeader.module.css';

export default function SiteHeader({ activeKey, roadStripes = false }) {
  const [direction, setDirection] = useState(activeKey === 'about' ? 'right' : 'left');

  const handleNavigation = (key) => {
    const nextDirection = key === 'about' ? 'right' : 'left';
    setDirection(nextDirection);
  };

  return (
    <header
      className={`${styles.siteHeader} ${roadStripes ? styles.siteHeaderRoad : ''}`}
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
