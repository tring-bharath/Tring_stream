import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaEye,FaHeart,FaUser } from 'react-icons/fa';
const Dashboard = () => {
    const url="https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=";

    const [videos,setVideos]=useState([]);
    const apicall= ()=>{
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.hits);
      })
      
      
    }
    useEffect(()=>
    {
      console.log(videos)
    },[videos])
    useEffect(()=>
    {
      apicall();  
    },[])
  return (
    <div className='d-flex flex-wrap video-cards'>

      {videos.map((video)=>
    (<div className="video-card">
      <img src={video.videos.medium.thumbnail} alt="video thumbnail" className="thumbnail" />
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
  )
}

export default Dashboard
