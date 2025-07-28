import {
  IconClockHour4Filled,
  IconHistory,
  IconHome,
  IconSettings,
} from '@tabler/icons-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Go to home page"
        title="Home"
      >
        <IconHome stroke={1} />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Go to settings page"
        title="Settings"
      >
        <IconSettings stroke={1} />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Go to history page"
        title="History"
      >
        <IconHistory stroke={1} />
      </a>
      {/* <a href="#" className={styles.menuLink}>
        <IconClockHour4Filled />
      </a> */}
    </nav>
  );
}
