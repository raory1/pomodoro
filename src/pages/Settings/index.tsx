import { IconDeviceFloppy } from '@tabler/icons-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { MainTemplate } from '../../templates/MainTemplate';

import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';
import { showToastify } from '../../adapters/toastifyAdapter';
import { TaskActionTypes } from '../../contexts/TaskContex/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function isValidRange(value: number) {
    return value >= 1 && value <= 99;
  }

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToastify.dismiss();

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      showToastify.error('Only numeric values are allowed.');
      return;
    }

    if (
      !isValidRange(workTime) ||
      !isValidRange(shortBreakTime) ||
      !isValidRange(longBreakTime)
    ) {
      showToastify.error('Value must be between 1 and 99.');
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        work: workTime,
        shortBreak: shortBreakTime,
        longBreak: longBreakTime,
      },
    });
    showToastify.sucess('Settings updated.');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Settings</Heading>
      </Container>

      <Container>
        <form action="" className="form" onSubmit={handleSaveSettings}>
          <div className="formRow">
            <Input
              id={'work'}
              label={'Work time'}
              required={true}
              placeholder="Type your task"
              defaultValue={state.config.work}
              type="number"
              ref={workTimeInputRef}
            />
          </div>

          <div className="formRow">
            <Input
              id={'shortBreak'}
              label={'Work time'}
              required={true}
              placeholder="Type your task"
              defaultValue={state.config.shortBreak}
              type="number"
              ref={shortBreakTimeInputRef}
            />
          </div>

          <div className="formRow">
            <Input
              id={'longBreak'}
              label={'Work time'}
              required={true}
              placeholder="Type your task"
              defaultValue={state.config.longBreak}
              type="number"
              ref={longBreakTimeInputRef}
            />
          </div>

          <div className="formRow">
            <Button
              icon={<IconDeviceFloppy />}
              label="Save settings"
              variant="default"
              aria-label="Save settings"
              title="Save settings"
              // type="submit"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
