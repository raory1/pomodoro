import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialState } from './initialTaskState';

const initialContextValue = { state: initialState, setState: () => {} };

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
