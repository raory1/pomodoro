import { IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { Button } from '../Button';
import { CycleTimeline } from '../CycleTimeline';
import { Input } from '../Input';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';
import { getNextCycle } from '../utils/getNextCycle';
import { getNextCycleType } from '../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContex/taskActions';

export function MainForm() {
  const { state, dispatch } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const hasTaskActive = state.activeTask;

  const stageMessages = {
    work: hasTaskActive ? (
      <span>Time to focus</span>
    ) : (
      <span>Next you'll focus for {state.config.work}m</span>
    ),
    shortBreak: hasTaskActive ? (
      <span>Let's take a break!</span>
    ) : (
      <span>Next you'll rest for {state.config.shortBreak}m</span>
    ),
    longBreak: hasTaskActive ? (
      <span>Take a break, but come back in {state.config.longBreak}m</span>
    ) : (
      <span>You'll rest for {state.config.longBreak}m</span>
    ),
  };

  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleStartNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: crypto.randomUUID(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      endDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleStartNewTask} className="form">
      <div className="formRow">
        <Input
          id={'task'}
          label={'task'}
          required={false}
          placeholder="Type your task"
          ref={taskNameInput}
          disabled={!!hasTaskActive}
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="formRow">
        {state.activeTask && stageMessages[state.activeTask.type]}
        {!state.activeTask && stageMessages[nextCycleType]}
      </div>
      {state.currentCycle != 0 && (
        <div className="formRow">
          <CycleTimeline />
        </div>
      )}

      <div className="formRow">
        {hasTaskActive ? (
          <Button
            title={'Give up'}
            variant="alert"
            type="button"
            icon={<IconPlayerStop stroke={1.5} />}
            onClick={handleInterruptTask}
            key={'btn_stop'}
          />
        ) : (
          <Button
            title={'Start focusing'}
            variant="default"
            type="submit"
            icon={<IconPlayerPlay stroke={1.5} />}
            key={'btn_submit'}
          />
        )}
      </div>
    </form>
  );
}
