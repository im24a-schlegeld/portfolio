import Link from 'next/link';
import { navigationItems } from '../../data/portfolio';
import styles from './SiteHeader.module.css';

export default function SiteHeader({ activeKey, roadTexture = false }) {
  return (
    <header className={`${styles.siteHeader} ${roadTexture ? styles.siteHeaderRoadTexture : ''}`} data-site-header="true">
      <div className={styles.siteHeaderInner}>
        <Link className={styles.siteLogo} href="/">
          Dario Schlegel
        </Link>

        <nav className={styles.siteNav} aria-label="Hauptnavigation">
          {navigationItems.map((item) => (
            <Link
              className={styles.siteNavLink}
              href={item.href}
              key={item.key}
              aria-current={item.key === activeKey ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
