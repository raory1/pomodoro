import { IconHistory, IconHome, IconSettings } from '@tabler/icons-react';
import styles from './styles.module.css';
import { Link } from 'react-router';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <Link
        to="/"
        className={styles.menuLink}
        aria-label="Go to home page"
        title="Home"
      >
        <IconHome stroke={1} />
      </Link>
      <Link
        to="/settings"
        className={styles.menuLink}
        aria-label="Go to settings page"
        title="Settings"
      >
        <IconSettings stroke={1} />
      </Link>
      <Link
        to="/history"
        className={styles.menuLink}
        aria-label="Go to history page"
        title="History"
      >
        <IconHistory stroke={1} />
      </Link>
    </nav>
  );
}
