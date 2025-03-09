import React, { useEffect, useState } from 'react'
import '../css/videoplayer.css'
import { FaAmericanSignLanguageInterpreting, FaEye, FaHeart } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import VideoCard from './VideoStreamingApp'

const Videopreview = () => {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  
  const url = `https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=${location.state.tag.split(",")[0]}`;

  const [videos, setVideos] = useState([]);
  const apicall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.hits);
        console.log(videos);

      })


  }
  useEffect(() => {
    apicall();
  }, [])

  return (
    <div>
      <video className='video-panel' src={location.state.Videourl} controls muted
        poster={location.state.thumbnail} />
      <h1>more like this</h1>
      <div className='d-flex flex-wrap video-cards align-items-center align-self-center justify-content-center'>
        {videos.map((video) =>
        (<VideoCard video={video}/>
        ))}
      </div>
      
    </div>

  )
}

export default Videopreview
