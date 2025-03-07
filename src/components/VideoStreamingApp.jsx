import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const VideoCard = ({video}) => {
  const [hover, setHover] = useState(false);
  const nav=useNavigate();
  const watchNow=(Videourl,tag)=>
  {
    nav("/videoplayer",{state:{Videourl,tag}})
  }
  const watchList= async(video)=>
  {
    await axios.post("http://localhost:5000/insert",video)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err)
    );

  }
  return (
    <div className="video-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img
        src={video.videos.medium.thumbnail}
        alt="video thumbnail"
        className="thumbnail"
      />
      <div className="video-info">
        <h3>{video.tags.split(",")[0]}</h3>
        <div className="video-stats">
          <span>
            <FaHeart /> {video.likes}
          </span>
          <span>
            <FaEye /> {video.views}
          </span>
        </div>
      </div>

      {hover && (
        <div className="overlay-buttons">
          <button className="watch-now" onClick={()=>watchNow(video.videos.large.url,video.tags)}>Watch Now</button>
          <button className="add-watchlist" onClick={()=>watchList(video)}>+ Watchlist</button>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
