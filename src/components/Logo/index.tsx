import { IconHourglassEmpty } from '@tabler/icons-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink}>
        <IconHourglassEmpty />
        <span>pomo timer</span>
      </a>
    </div>
  );
}
