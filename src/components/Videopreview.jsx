import React, { useEffect, useState } from 'react'
import '../css/videoplayer.css'
import { FaAmericanSignLanguageInterpreting, FaEye, FaHeart } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import VideoCard from './VideoStreamingApp'
import { NavbarToggle } from 'react-bootstrap'

const Videopreview = () => {
  const [hover, setHover] = useState(false);
  const location = useLocation();

  const url = `https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=${location.state.tag.split(",")[0]}`;
  const navigate=useNavigate();
  const [videos, setVideos] = useState([]);
  const apicall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.hits);
        console.log(videos);

      })


  }
  const navToHome=()=>
  {
    navigate('/');
  }
  useEffect(() => {
    apicall();
  }, [])

  return (
    <div>
      <video className='video-panel' src={location.state.Videourl} controls muted
        poster={location.state.thumbnail} />
       <h1 className='text-white ms-4 mt-2'> {location.state.tag}</h1>
      <div className="navigate d-flex justify-content-between">
        <h2 className='p-4 ps-5 ms-2 text-white'>More like this ...</h2>
        <button className='m-4 px-3 rounded-2 h6' onClick={()=>navToHome()}>Back to home</button>
      </div>
      <div className='d-flex flex-wrap video-cards align-items-center align-self-center justify-content-center'>
        {videos.map((video) =>
        (<VideoCard video={video} />
        ))}
      </div>

    </div>

  )
}

export default Videopreview
