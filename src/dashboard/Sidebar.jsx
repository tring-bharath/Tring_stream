import { ProfileName } from '../routes/AppRoutes';
import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBookmark, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const {userName,setUsername}=useContext(ProfileName);

  const user=JSON.parse(localStorage.getItem("user"));
  setUsername(user)
  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(()=>
  {
    setUsername();
  },[user])
  return (
    <div className="sidebar bg-dark p-3 d-flex flex-column gap-4" >
      <h3 className="text-white text-center my-4">Menu</h3>
      
      <Link to="/" className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/') ? 'active' : ''}`}>
        <FaHome size={24} className="me-3" />
        <h5 className="mb-0">Home</h5>
      </Link>
      
      <Link to="/search" className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/search') ? 'active' : ''}`}>
        <FaSearch size={24} className="me-3" />
        <h5 className="mb-0">Search</h5>
      </Link>
      
      <Link to="/watchlist" className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/watchlist') ? 'active' : ''}`}>
        <FaBookmark size={24} className="me-3" />
        <h5 className="mb-0">Watch List</h5>
      </Link>
      
      <Link to="/profile" className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/profile') ? 'active' : ''}`}>
        <CgProfile size={24} className="me-3" />
        <h5 className='username d-flex align-self-center'>{user==null?"Profile":user}</h5>  
      </Link>
    </div>
  );
};

export default Sidebar;



