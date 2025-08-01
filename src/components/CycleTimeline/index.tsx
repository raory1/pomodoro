import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';
import { getNextCycle } from '../utils/getNextCycle';
import { getNextCycleType } from '../utils/getNextCycleType';
import styles from './styles.module.css';

export function CycleTimeline() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  return (
    <div className={styles.container}>
      <span>Cycles:</span>

      <div className={styles.cycle}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              className={`${styles.dot} ${styles[nextCycleType]}`}
              key={`${nextCycleType}_${nextCycle}`}
              aria-label="Indicador de ciclo"
              title="Indicador de ciclo"
            ></span>
          );
        })}
      </div>
    </div>
  );
}
