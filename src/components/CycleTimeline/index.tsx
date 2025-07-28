import styles from './styles.module.css';

export function CycleTimeline() {
  return (
    <div className={styles.container}>
      <span>Cycles:</span>

      <div className={styles.cycle}>
        <div className={`${styles.dot} ${styles.work}`}></div>
        <div className={`${styles.dot} ${styles.shortRest}`}></div>
        <div className={`${styles.dot} ${styles.longRest}`}></div>
      </div>
    </div>
  );
}
