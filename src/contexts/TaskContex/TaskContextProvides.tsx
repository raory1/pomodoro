import { useEffect, useReducer } from 'react';
import { initialState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialState, () => {
    const storageState = localStorage.getItem('state');
    if (storageState === null) return initialState;
    else {
      const parsedStorageState = JSON.parse(storageState) as TaskStateModel;
      return {
        ...parsedStorageState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    }
    return initialState;
  });

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const remainingTime = e.data;
    console.log('Remaining Time:', remainingTime);

    if (remainingTime <= 0) {
      dispatch({
        type: 'COMPLETE_TASK',
      });
      worker.terminate();
      console.log('Worker done processing');
    } else {
      dispatch({
        type: 'COUNT_DOWN',
        payload: { secondsRemaining: remainingTime },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    } else {
      worker.postMessage(state);
    }

    document.title = `${state.formattedSecondsRemaining} | pomo timer`;
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
