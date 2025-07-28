import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { CycleTimeline } from './components/CycleTimeline';

export function App() {
  return (
    <>
      <Container>
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
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
