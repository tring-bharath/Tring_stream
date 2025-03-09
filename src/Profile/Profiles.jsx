import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate=useNavigate();
  const loginNavigate=()=>
  {
    console.log("hi");
    
    navigate("/registration");
  }
  return (
    <div>
      <button onClick={loginNavigate}>Login to Use the streaming</button>
    </div>
  )
}

export default Profile
