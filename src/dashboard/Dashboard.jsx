import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaEye, FaHeart, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { globaldata } from './Home';
import '../css/Dashboard.css'
import Carousel from 'react-bootstrap/Carousel';
import VideoCard from '../components/VideoStreamingApp';
const Dashboard = () => {

  const url = "https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=living";

  const [videos, setVideos] = useState([]);
  const apicall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.hits);
      })


  }
  useEffect(() => {
    console.log(videos)
  }, [videos])
  useEffect(() => {
    apicall();
  }, [])
  return (
    <div className="container ">
      <Carousel wrap={true} interval={5000} pause={false} className='carousel'>
        {videos.map((video)=>(
          <Carousel.Item>
          <img
            src={video.videos.large.thumbnail}
            alt="Banner"
            className="banner-image"
          />
          <Carousel.Caption className='banner'>
            <h1 className="banner-title align-self-start">{video.tags}</h1>
            <p className="banner-description">
              User Name : {video.user}
            </p><p className="banner-description">
              <FaHeart /> {video.likes}
            </p><p className="banner-description">
              <FaEye />{video.views}
            </p>
          </Carousel.Caption>
          </Carousel.Item>
      ))}
      </Carousel>
      <div className='d-flex flex-wrap video-cards ms-2'>
        {videos.map((video) => (<VideoCard video={video} />))}
      </div>
    </div>
  )
}


export default Dashboard
