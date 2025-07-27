import './styles/theme.css';
import './styles/global.css';
import { IconClockHour11Filled } from '@tabler/icons-react';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

export function App() {
  return (
    <>
      <Container>
        <Logo/>
      </Container>
    </>
  );
}
