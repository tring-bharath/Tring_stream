import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import AppRoutes from './routes/AppRoutes'
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
function App() {
  
  return (
    <div className='app bg-dark'>
    <ToastContainer position="top-right" autoClose={2000} />
    <AppRoutes/>
    </div>
  )
}

export default App
