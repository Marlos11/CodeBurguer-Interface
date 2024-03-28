import React from 'react'
import { ToastContainer } from 'react-toastify';
import Login from './containers/Login'
import Register from './containers/Register'
import ReactDOM from 'react-dom/client'
import Globalstyles from './styles/Globalstyles'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {   <Register /> }
    <Globalstyles/>
  {/*   <Login/> */}
    <ToastContainer theme='colored' />
  </React.StrictMode>,
)
