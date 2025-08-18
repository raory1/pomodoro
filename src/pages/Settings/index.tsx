import { IconDeviceFloppy } from '@tabler/icons-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { initialState } from '../../contexts/TaskContex/initialTaskState';
import { MainTemplate } from '../../templates/MainTemplate';

import style from './styles.module.css';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';

export function Settings() {
  const { state } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakTimeInputRef.current?.value;
    const longBreakTime = longBreakTimeInputRef.current?.value;
    console.log(workTime, shortBreakTime, longBreakTime);
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
              // type="number"
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
              // type="number"
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
