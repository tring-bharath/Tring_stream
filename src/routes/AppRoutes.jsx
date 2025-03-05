import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../dashboard/Home'
import Landingpage from '../Profile/Landingpage'
import Search from '../dashboard/Search'
import Wathclist from '../dashboard/Wathclist'
import Login from '../Profile/login'
import Signup from '../Profile/signup'
import Dashboard from '../dashboard/Dashboard'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>}>
      <Route path='/' element={<Dashboard/>}/>
        <Route path='Search' element={<Search/>}/>
        <Route path='WatchList' element={<Wathclist/>}/>
      </Route>
      <Route path="/Registration" element={<Landingpage/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
          
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
