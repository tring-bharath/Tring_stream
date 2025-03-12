import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FaEye, FaHeart, FaHistory } from 'react-icons/fa';
import { ProfileName } from '../routes/AppRoutes';
import { Button, Modal } from 'react-bootstrap';


const Profile = () => {
  const [show,setShow]=useState(false);
  const { userName, setUsername } = useContext(ProfileName);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();

  const loginNavigate = () => {
    navigate("/registration");
  }

  const logout = () => {
    localStorage.clear("User");
    setUsername(null)
  }

  const [videos, setVideos] = useState([]);
  const showCards = async () => {
    const res = await axios.get(`https://nzqqkzs6-5000.inc1.devtunnels.ms/history/${userId}`)//http://localhost:5000/watchList
    setVideos(res.data)
  }

  useEffect(() => {
    showCards();
  }, [])
  return (
    <div className='d-flex justify-content-center align-items-center w-100'>
      {user == null ?
        <div className='d-flex flex-column justify-content-center text-white align-self-center'>
          <h3>Login to access the history</h3>
          <div className="btn">
            <button className='btn bg-primary text-white' onClick={loginNavigate}>Login</button>
          </div>
        </div>
        :
        <div className="history d-flex  flex-column w-100 h-100">
          <Modal show={show}>
            <Modal.Header>
              <div className="logout-header h3">Log Out</div>
            </Modal.Header>
            <Modal.Body>
                <div className="logout-body h4">Are you sure want to logout!</div>
            </Modal.Body>
            <Modal.Footer>
              <Button className='h4' onClick={()=>setShow(false)}>CANCEL</Button>
              <Button variant='danger' onClick={()=>logout()}>LOG OUT</Button>
            </Modal.Footer>
          </Modal>
          <div className="header d-flex justify-content-between w-100">
            <div className="history h2 align-self-center ms-3 text-white">History <FaHistory /></div>
            <div className="nav align-self-end m-3 ">
              <button className="px-3 py-2 rounded-1 h5 text-white bg-primary" onClick={()=>setShow(true)}>Logout</button>
            </div>
          </div>
          <div className='d-flex px-3 flex-wrap video-cards'>
            {videos.map((video) => (<HistoryCard video={video} showCards={showCards} />))}
          </div>
        </div>
      }

    </div>
  )
}

const HistoryCard = ({ video, showCards }) => {
  const nav = useNavigate();
  const [hover, setHover] = useState(false);

  const remove = async (video) => {
    const deletedVideo = await axios.delete(`https://nzqqkzs6-5000.inc1.devtunnels.ms/removeFromHistory/${video._id}`)//http://localhost:5000/removeFromWatchList/${video._id}
    showCards();
  }

  const watchNow = () => {
    nav("/videoplayer", { state: video })
  }
  return (
    <div className="video-card rounded-2 bg-secondary" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={video.thumbnail} alt="video thumbnail" className="thumbnail rounded-3" />
      <div className="video-info px-2">
        <h5 className='tag mt-1' style={{ textTransform: "capitalize" }}>{video.tags?.split(",")[0]}</h5>
        <div className="video-stats mb-2">
          <span className='fw-semibold me-2'><FaHeart size={12} className='text-danger' /> {video.likes} </span>
          <span className='fw-semibold'><FaEye size={13} className='' /> {video.views}</span>
        </div>
      </div>
      {hover && (
        <div className="overlay-buttons d-flex mb-2">
          <button className="watch-now btn rounded-1 bg-primary text-white px-2 mx-2 fw-semibold" onClick={() => watchNow()}>Watch Now</button>
          <button className="add-watchlist btn bg-danger text-white fw-semibold" onClick={() => remove(video)}>Remove</button>
        </div>
      )}
    </div>
  )

}
export default Profile
