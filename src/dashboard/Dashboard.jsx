import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaEye,FaHeart, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { globaldata } from './Home';
import VideoCard from '../components/VideoStreamingApp';
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
      {videos.map((video)=>(<VideoCard video={video} />))}
    </div>
  )
}


export default Dashboard
