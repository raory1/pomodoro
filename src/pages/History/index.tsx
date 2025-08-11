import { IconTrash } from '@tabler/icons-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';

export function History() {
  const { state } = useTaskContext();

  return (
    <MainTemplate>
      <Container>
        <Heading>History</Heading>
      </Container>

      <Container>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>{state.tasks.map((task)=>{
                  return (
                  <tr>
                    {/* <td>{task.id}</td> */}
                    <td>{task.name}</td>
                    <td>{new Date(task.startDate).toISOString()}</td>
                    <td>{task.interruptDate}</td>
                    <td>{task.type}</td>
                  </tr>
                );
            })}</tbody>
          </table>
        </div>
      </Container>

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
