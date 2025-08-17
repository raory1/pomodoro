import { IconTrash } from '@tabler/icons-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContex/useTaskContext';
import { formatDate } from '../../components/utils/formatDate';
import { getTaskStatus } from '../../components/utils/getTaskStatus';
import { TaskActionTypes } from '../../contexts/TaskContex/taskActions';
import { showConfirmDialog } from '../../components/utils/confirmDialog';

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const taskTypeMap = {
    work: 'Focus',
    shortBreak: 'Short break',
    longBreak: 'Long break',
  };

  async function handleDeleteHistory() {
    const isConfirmed = await showConfirmDialog(
      'Delete all task history?',
      'This action cannot be undone.'
    );

    if (!isConfirmed) return;
    else dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>History</Heading>
      </Container>

      <Container>
        <div className={styles.tableContainer}>
          {hasTasks ? (
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
                      <tr key={task.id}>
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
          ) : (
            <p>
              Seems like you don't have any task. Start a new one to see it
              here.
            </p>
          )}
        </div>
      </Container>

      {hasTasks && (
        <Container>
          <Button
            variant="alert"
            icon={<IconTrash />}
            aria-label="Clear all tasks history"
            title="Clear history"
            onClick={handleDeleteHistory}
          />
        </Container>
      )}
    </MainTemplate>
  );
}
