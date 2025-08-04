import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContex/TaskContextProvides';
import { ToastContainer, Zoom } from 'react-toastify';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
      <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </TaskContextProvider>
  );
}
