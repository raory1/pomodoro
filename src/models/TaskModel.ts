import type { TaskModel } from './TaskStateModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: { // time for each cycle
    work: number;
    shortBreak: number;
    longBreak: number;
  };
};
