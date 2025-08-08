import { IconTrash } from '@tabler/icons-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';

export function History() {
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
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 20 }).map(() => {
                return (
                  <tr>
                    <td>asdasdasdadad</td>
                    <td>Do the laundry</td>
                    <td>18/05/2020</td>
                    <td>Completed</td>
                    <td>Long rest</td>
                  </tr>
                );
              })}
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
