import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaEye,FaHeart, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { globaldata } from './Home';
import '../css/Dashboard.css'
import VideoCard from '../components/VideoStreamingApp';
const Dashboard = () => {

    const url="https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=living";

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
    <div className="container">
      <div className="banner">
        <img
          src={videos.length!=0&&videos[0].videos.large.thumbnail}
          alt="Banner"
          className="banner-image"
        />
        <div className="banner-content">
          <h1 className="banner-title">{videos.length!=0&&videos[0].tags}</h1>
          <p className="banner-description">
          {videos.length!=0&&videos[0].user}
          </p><p className="banner-description">
          {videos.length!=0&&videos[0].likes}
          </p><p className="banner-description">
          {videos.length!=0&&videos[0].views}
          </p>
        </div>
      </div>
    <div className='d-flex flex-wrap video-cards ms-2'>
      {videos.map((video)=>(<VideoCard video={video} />))}
    </div>
    </div>
  )
}


export default Dashboard
