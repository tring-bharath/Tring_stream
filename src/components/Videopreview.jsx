import React, { useEffect, useState } from 'react'
import '../css/videoplayer.css'
import { FaAmericanSignLanguageInterpreting, FaEye, FaHeart } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Videopreview = (props) => {

  const location=useLocation();
  console.log(location.state.tag);
  
  // const a=tag.split(",")[0]
const [search,setSearch]=useState();
  const url=`https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=${location.state.tag.split(",")[0]}`;
  
      const [videos,setVideos]=useState([]);
      const apicall= ()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setVideos(data.hits);
          console.log(videos);
          
        })
        
        
      }
      useEffect(()=>
      {
        apicall();  
      },[])

  return (
    <div>
      <video className='video-panel' src={location.state.Videourl} controls loop muted 
      poster="https://cdn.pixabay.com/video/2018/05/26/16459-272487477_medium.jpg"/>
      <h1>more like this</h1>
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
    </div>
    
  )
}

export default Videopreview
