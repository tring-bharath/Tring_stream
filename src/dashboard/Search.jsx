import React, { useState, useEffect } from 'react'
import { FaEye, FaHeart, FaUser } from 'react-icons/fa';
const Search = () => {

  const [search, setSearch] = useState();
  const url = `https://pixabay.com/api/videos/?key=49160670-8b09c7d4f9c7bed1e8a624b6b&q=${search}`;

  const [videos, setVideos] = useState([]);
  const apicall = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.hits);
      })


  }
  useEffect(() => {
    apicall();
  }, [search])
  return (
    <>
      <div className="search">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className='d-flex flex-wrap video-cards'>
        {videos.map((video) =>
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
    </>
  )
}

export default Search
