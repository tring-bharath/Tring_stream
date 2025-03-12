import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css'
import Carousel from 'react-bootstrap/Carousel';
import VideoCard from '../components/VideoStreamingApp';
import axios from 'axios';

const Dashboard = () => {
  const nav=useNavigate();
  const url = "https://nzqqkzs6-5000.inc1.devtunnels.ms/getAllVideos";//https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=nature

  const [videos, setVideos] = useState([]);
  const apicall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        console.log(videos);
        
      })

  }
  const watchNow=(video)=>
    {
      nav("/videoplayer",{state:video})
    }
  useEffect(() => {
    console.log(videos)
  }, [videos])
  useEffect(() => {
    apicall();
  }, [])
  return (
    <div className="carousel-container">
      <Carousel wrap={true} interval={2000} className='carousel mb-3'>
        {videos.map((video) => (
          <Carousel.Item>
            <img
              src={video?.thumbnail}
              alt="Banner"
              className="banner-image"
            />
            <Carousel.Caption className='banner'>
              <h1 className="banner-title align-self-start">{video.tags}</h1>
              <div className="banner-footer d-flex align-items-center">
                <button className='px-3 py-2 rounded-1 me-3 mt-3 carousel-btn ' onClick={()=>watchNow(video)}>Watch Now</button>
              </div>
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
