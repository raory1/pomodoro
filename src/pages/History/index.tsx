import { IconTrash } from '@tabler/icons-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';
import { formatDate } from '../../components/utils/formatDate';
import { getTaskStatus } from '../../components/utils/getTaskStatus';

export function History() {
  const { state } = useTaskContext();

  const taskTypeMap = {
    work: 'Focus',
    shortBreak: 'Short break',
    longBreak: 'Long break',
  };

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
            <tbody>
              {state.tasks
                .map((task) => {
                  return (
                    <tr>
                      {/* <td>{task.id}</td> */}
                      <td>{task.name}</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeMap[task.type]}</td>
                    </tr>
                  );
                })
                .reverse()}
            </tbody>
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
