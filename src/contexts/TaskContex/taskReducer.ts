import { formatSecondsToMinutes } from '../../components/utils/formatSecondsToMinutes';
import { getNextCycle } from '../../components/utils/getNextCycle';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        config: { ...state.config },
        activeTask: newTask,
        currentCycle: nextCycle,
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        activeTask: null,
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          } else {
            return task;
          }
        }),
      };
    }

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        activeTask: null,
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, endDate: Date.now() };
          } else {
            return task;
          }
        }),
      };
    }

    case TaskActionTypes.RESET_STATE: {
      return {
        ...state,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        activeTask: null,
        tasks: [],
      };
    }

    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining
        ),
      };
    }

    case TaskActionTypes.CHANGE_SETTINGS: {
      return { ...state, config: { ...action.payload } };
    }
  }

  return state;
}
