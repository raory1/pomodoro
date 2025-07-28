import { IconClockHour4Filled, IconHistory, IconHome, IconSettings } from '@tabler/icons-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink}>
        <IconHome stroke={1} />
      </a>
      <a href="#" className={styles.menuLink}>
        <IconSettings stroke={1} />
      </a>
      <a href="#" className={styles.menuLink}>
        <IconHistory stroke={1} />
      </a>
      {/* <a href="#" className={styles.menuLink}>
        <IconClockHour4Filled />
      </a> */}
    </nav>
  );
}
