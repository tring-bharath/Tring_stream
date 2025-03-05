import React from 'react'
import { Button } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
// import
const Landingpage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className="register-button d-flex ">
      <Button>Login</Button>
      <Button>Sign-Up</Button>
      </div>
      <Outlet/>
    </div>
  )
}

export default Landingpage
