import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import sideImage from '../assets/front_image.jpg'
import '../css/Registration.css'
const Landingpage = () => { 
  const [active,setActive]=useState(0);
  const nav=useNavigate();

  const login=()=>
  {
    nav('/registration')
    setActive(0);
  }

  const signup=()=>
  {
    nav('/registration/signup')
    setActive(1);
  }
  return (
    <div className="registerContainer bg-white">
      <div className='Container'>
        <div className='formContainer shadow-lg'>
          <div className="registerButton d-flex justify-content-center align-items-center">
            <button onClick={()=>login()} className={`px-3 login py-2 ${active==0?"active":""}`} >Login</button>
            <button onClick={()=>signup()} className={`px-3 signup py-2 ${active==1?"active":""}`}>Sign-Up</button>
          </div>
          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="sideImage-container">
        <img src={sideImage} className='sideImage' alt="" />
      </div>
    </div>
  )
}

export default Landingpage
