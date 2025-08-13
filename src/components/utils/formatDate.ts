import { format } from 'date-fns';

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  const formatedDate = format(date, 'MM/dd/yyyy');
  return formatedDate;
}
