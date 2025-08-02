import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialState } from './initialTaskState';
import type { TaskActionModel } from './taskActions';

const initialContextValue = { state: initialState, dispatch: () => {} };

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
