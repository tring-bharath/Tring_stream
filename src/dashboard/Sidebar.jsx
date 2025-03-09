
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBookmark, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar bg-dark p-3 d-flex flex-column gap-4" >
      <h3 className="text-white text-center my-4">Menu</h3>
      
      <Link 
        to="/" 
        className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/') ? 'active' : ''}`}
      >
        <FaHome size={24} className="me-3" />
        <h5 className="mb-0">Home</h5>
      </Link>
      
      <Link 
        to="/search" 
        className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/search') ? 'active' : ''}`}
      >
        <FaSearch size={24} className="me-3" />
        <h5 className="mb-0">Search</h5>
      </Link>
      
      <Link 
        to="/watchlist" 
        className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/watchlist') ? 'active' : ''}`}
      >
        <FaBookmark size={24} className="me-3" />
        <h5 className="mb-0">Watch List</h5>
      </Link>
      
      <Link 
        to="/profile" 
        className={`sidebar-link d-flex align-items-center p-3 rounded text-decoration-none ${isActive('/profile') ? 'active' : ''}`}
      >
        <CgProfile size={24} className="me-3" />
        <h5 className="mb-0">Profile</h5>
      </Link>
    </div>
  );
};

export default Sidebar;





// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaHome,FaBookmark,FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";

// const Sidebar = () => {
//   return (
//     <div className='side-bar d-flex flex-column gap-5 text-white justify-content-center'>
//       <Link to='/' className='link '><FaHome size={24}/><h5>Home</h5></Link>
//       <Link to='/search' className='link'><FaSearch size={24}/><h5>Search</h5></Link>
//       <Link to='/watchlist' className='link'><FaBookmark size={24}/><h5>Watch List</h5></Link>
//       <Link to='/profile' className='link'><CgProfile size={24}/><h5>Profile</h5></Link>
//     </div>
//   )
// }

// export default Sidebar
