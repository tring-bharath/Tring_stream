import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Home = () => {

  return (
    <div className='d-flex'>
      <Sidebar className='sidebar'/>
      <Outlet/>
    </div>
  )
}

export default Home
