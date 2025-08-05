import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import style from './styles.module.css';

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Settings</Heading>
      </Container>
    </MainTemplate>
  );
}
