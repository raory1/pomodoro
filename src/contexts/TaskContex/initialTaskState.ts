import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:01',
  activeTask: null,
  currentCycle: 0,
  config: {
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};
