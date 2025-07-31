import { IconPlayerPlay } from '@tabler/icons-react';
import { Button } from '../Button';
import { CycleTimeline } from '../CycleTimeline';
import { Input } from '../Input';
import { useRef, useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';

export function MainForm() {
  const { setState } = useTaskContext();

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
      duration: 1,
      startDate: Date.now(),
      endDate: null,
      interruptDate: null,
      type: 'work',
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        activeTask: newTask,
        currentCycle: 1,
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
      <div className="formRow">
        <CycleTimeline />
      </div>
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
