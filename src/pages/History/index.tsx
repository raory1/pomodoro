import { IconTrash } from '@tabler/icons-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import style from './styles.module.css';

export function History() {
  return (
    <MainTemplate>
      <Container>
        <Heading>History</Heading>
      </Container>

      <Container>table</Container>
      
      <Container>
        <Button
          variant="alert"
          icon={<IconTrash />}
          aria-label="Clear all tasks history"
          title="Clear history"
        />
      </Container>
    </MainTemplate>
  );
}
