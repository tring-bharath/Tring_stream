import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEye, FaHeart } from 'react-icons/fa';

const Wathclist = () => {
  const [videos,setVideos]=useState([]);
  const showCards=async()=>
  {
    const res=await axios.get("http://localhost:5000/watchList")
    setVideos(res.data)
  }


  useEffect(()=>
  {
    showCards();

  },[])
  return (
    <div>
      <div className='d-flex flex-wrap video-cards'>
        {videos.map((video) =>
        (<div className="video-card">
          <img src={video.thumbnail} alt="video thumbnail" className="thumbnail" />
          <div className="video-info">
            <h3>{video.tags.split(",")[0]}</h3>

            <div className="video-stats">
              <span><FaHeart /> {video.likes}</span>
              <span><FaEye /> {video.views}</span>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Wathclist
