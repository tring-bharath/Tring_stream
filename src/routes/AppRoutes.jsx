import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../dashboard/Home'
import Landingpage from '../Profile/Landingpage'
import Search from '../dashboard/Search'
import Wathclist from '../dashboard/Wathclist'
import Login from '../Profile/login'
import Profile from '../Profile/profiles'
import Signup from '../Profile/signup'
import Dashboard from '../dashboard/Dashboard'
import Videopreview from '../components/Videopreview'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>}>
      <Route path='/' element={<Dashboard/>}/>
        <Route path='Search' element={<Search/>}/>
        <Route path='WatchList' element={<Wathclist/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Route>
      <Route path="/registration" element={<Landingpage/>}>
        <Route path='' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
          
      </Route>
      <Route path='/videoPlayer' element={<Videopreview/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
