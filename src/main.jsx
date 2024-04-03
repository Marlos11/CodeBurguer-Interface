import React from 'react'
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './hooks/UserContext'
import Myroutes from './routes/routes';

import ReactDOM from 'react-dom/client'
import Globalstyles from './styles/Globalstyles'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserProvider>
      <Myroutes />

    </UserProvider>
    <ToastContainer theme='colored' />
    <Globalstyles />
  </React.StrictMode>,
)
