import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export const globaldata=createContext();

const Home = () => {

  const [videos,setVideos]=useState();

  return (
    <div className='d-flex'>
      <globaldata.Provider value={{videos,setVideos}}>
      <Sidebar className='sidebar'/>
      <Outlet/>
      </globaldata.Provider>
    </div>
  )
}

export default Home
