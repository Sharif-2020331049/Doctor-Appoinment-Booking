import { useContext, useState } from 'react'
import './App.css'
import Login from './pages/Login'
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './contexts/AdminContext';
import Navbar from './components/Navbar';

function App() {
const {adminToken} = useContext(AdminContext)
  return adminToken ? (
    <div  className=' bg-[#F8F9FD]'>
        <ToastContainer/>
        <Navbar/>
          </div>
  ):
  (
    <>
        <Login/>
        <ToastContainer/>
    </>
  )
}

export default App


