import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../css/VideoCard.css'
const VideoCard = ({video}) => {
  const [hover, setHover] = useState(false);
  const nav=useNavigate();
  const watchNow=(Videourl,tag,thumbnail)=>
  {
    nav("/videoplayer",{state:{Videourl,tag,thumbnail}})
  }
  const watchList= async(video)=>
  {
    await axios.post("http://localhost:5000/insert",video)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err)
    );

  }
  return (
    <div className="video-card rounded-1 bg-secondary pb-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img 
        src={video.videos.medium.thumbnail}
        alt="video thumbnail"
        className="thumbnail cards rounded-1"
      />
      <div className="video-info d-flex flex-column">
        <h4 className="px-2">{video.tags.split(",")[0]}</h4>
        <div className="video-stats px-2">
          <span className="likes pe-3">
            <FaHeart /> {video.likes}
          </span>
          <span>
            <FaEye /> {video.views}
          </span>
        </div>
      </div>

        <div className="overlay-buttons d-flex px-2 my-1">
          <button className="watch-now button rounded px-2 py-1 me-1" onClick={()=>watchNow(video.videos.large.url,video.tags,video.videos.large.thumbnail)}>Watch Now</button>
          <button className="add-watchlist button rounded px-2 py-1" onClick={()=>watchList(video)}>+ Watchlist</button>
        </div>
    </div>
  );
};

export default VideoCard;
