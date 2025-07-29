import type { TaskStateModel } from './TaskModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  endDate: number;
  interruptDate: number;
  type: keyof TaskStateModel['config'];
};
