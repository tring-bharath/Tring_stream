import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Home
