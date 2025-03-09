import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEye, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



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
        {videos.map((video) =>(<WatchListCard video={video} showCards={showCards}/>))}
      </div>
    </div>
  )
}

const WatchListCard =({video,showCards})=>{
  const nav =useNavigate();
  const [hover,setHover]=useState(false);

  const remove= async (video)=>
  {
    const deletedVideo=await axios.delete(`http://localhost:5000/removeFromWatchList/${video._id}`)
    showCards();
  }
  const watchNow=(Videourl,tag,thumbnail)=>
    {
      nav("/videoplayer",{state:{Videourl,tag,thumbnail}})
    }
  return(
    <div className="video-card" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          <img src={video.thumbnail} alt="video thumbnail" className="thumbnail" />
          <div className="video-info">
            <h3>{video.tags.split(",")[0]}</h3>

            <div className="video-stats">
              <span><FaHeart /> {video.likes}</span>
              <span><FaEye /> {video.views}</span>
            </div>
          </div>
          {hover && (
        <div className="overlay-buttons">
          <button className="watch-now" onClick={() =>{ watchNow(video.videoURL, video.tags, video.thumbnail);
            console.log(video);
            
          }}>Watch Now</button>
          <button className="add-watchlist" onClick={() => remove(video)}>Remove</button>
        </div>
      )}
        </div>
  )
  
}
export default Wathclist
