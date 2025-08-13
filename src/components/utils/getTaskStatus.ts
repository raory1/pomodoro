import type { TaskModel } from '../../models/TaskModel';

type TaskStatus = 'Completed' | 'In progress' | 'Interrupted' | 'Abandoned';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null): TaskStatus {
  if (task.endDate !== null) {
    return 'Completed';
  } else if (task.interruptDate !== null) {
    return 'Interrupted';
  } else if (task.id === activeTask?.id) {
    return 'In progress';
  }

  return 'Abandoned';
}
