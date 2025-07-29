import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { CycleTimeline } from './components/CycleTimeline';
import { Button } from './components/Button';
import { IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { Footer } from './components/Footer';
import { ToggleTheme } from './components/ToggleTheme';

export function App() {
  return (
    <>
      <Container>
        <ToggleTheme />
        <Logo />
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form">
          <div className="formRow">
            <Input
              id={'task'}
              label={'task'}
              required={false}
              placeholder="Type your task"
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
      </Container>

      <Footer />
    </>
  );
}
