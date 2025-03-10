import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import AppRoutes from './routes/AppRoutes'
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
function App() {
  
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
    <AppRoutes/>
    </>
  )
}

export default App
