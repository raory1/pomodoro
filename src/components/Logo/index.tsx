import { IconHourglassEmpty } from '@tabler/icons-react';
import styles from './styles.module.css';
import { Link } from 'react-router';

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.logoLink}>
        <IconHourglassEmpty />
        <span>pomo timer</span>
      </Link>
    </div>
  );
}
