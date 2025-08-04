import { toast } from 'react-toastify';

export const showToastify = {
  sucess: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast.info(message),
  warn: (message: string) => toast.warn(message),
  warning: (message: string) => toast.warning(message),
};
