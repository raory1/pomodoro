import { useEffect, useReducer } from 'react';
import { initialState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const remainingTime = e.data;
    console.log('Remaining Time:', remainingTime);

    if (remainingTime <= 0) {
      worker.terminate();
      console.log('Worker done processing');
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker finished no active task');
      worker.terminate();
    } else {
      worker.postMessage(state);
    }
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
