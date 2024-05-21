import React from 'react'
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';

import ReactDOM from 'react-dom/client'
import Globalstyles from './styles/Globalstyles'
/* import Login from './containers/Login' */
import MyRoutes from './routes/routes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AppProvider>
      <MyRoutes />

    </AppProvider>
    <ToastContainer theme='colored' />
    <Globalstyles />
  </React.StrictMode>,
)
