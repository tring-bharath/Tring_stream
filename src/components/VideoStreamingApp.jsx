import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "49160670-8b09c7d4f9c7bed1e8a624b6b"; 
const API_URL = `https://pixabay.com/api/videos/?key=${API_KEY}&q=`;

const VideoStreamingApp = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.hits);
        
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);
  

  return (
    <div className="">
      <h1 className="">React Video Streaming App</h1>
      {selectedVideo && (
  <video key={selectedVideo} controls className="" style={{margin:"20px",height:"100px",width:"100px"}}>
    <source src={selectedVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)}
      <div className="flex gap-4 overflow-x-auto p-2" style={{margin:"20px"}}>
        
        
        {videos.map((video) => (
          <img
          key={video.id}
          src={video.videos.medium.thumbnail} 
          alt=""
          className=""
          style={{margin:"20px",height:"100px",width:"100px"}}
          onClick={() =>{ setSelectedVideo(video.videos.medium.url);
            console.log(video);
            
          }}
        />
        
        ))}
      </div>
    </div>
  );
};

export default VideoStreamingApp;
