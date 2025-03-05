import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome,FaBookmark,FaSearch } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className='side-bar d-flex flex-column gap-5 text-white justify-content-center'>
      <Link to='/' className='link '><FaHome size={24}/><h5>Home</h5></Link>
      <Link to='/search' className='link'><FaSearch size={24}/><h5>Search</h5></Link>
      <Link to='/watchlist' className='link'><FaBookmark size={24}/><h5>Watch List</h5></Link>
    </div>
  )
}

export default Sidebar
