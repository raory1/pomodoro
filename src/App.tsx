import './styles/theme.css';
import './styles/global.css';

import { TaskContextProvider } from './contexts/TaskContex/TaskContextProvides';
import { ToastContainer, Zoom } from 'react-toastify';
import { MainRouter } from './routers/router';

export function App() {
  return (
    <TaskContextProvider>
      <MainRouter/>
      
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
