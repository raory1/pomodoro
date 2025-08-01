import { IconPlayerPlay } from '@tabler/icons-react';
import { Button } from '../Button';
import { CycleTimeline } from '../CycleTimeline';
import { Input } from '../Input';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';
import { getNextCycle } from '../utils/getNextCycle';
import { getNextCycleType } from '../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

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

    const secondsRemaining = newTask.duration * 60;

    setState((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        activeTask: newTask,
        currentCycle: nextCycle,
      };
    });
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
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      {state.currentCycle != 0 && (
        <div className="formRow">
          <CycleTimeline />
        </div>
      )}

      <div className="formRow">
        <Button
          title={'Start focusing'}
          variant="default"
          icon={<IconPlayerPlay stroke={1.5} />}
        />
        {/* <Button title={"Give up"} variant='alert' icon={<IconPlayerStop stroke={1.5} />} /> */}
      </div>
    </form>
  );
}
