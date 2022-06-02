import React from 'react'
import "./Cover.css"


const Cover = () => {
  return (
  <div className="cover-container">
      <video className="video" src={`${process.env.PUBLIC_URL}/media/coverVideo.mp4`} autoPlay loop muted />
      <h1> Kit Tonic </h1>
      <p>Good Times | Good Taste | Good Memories</p>

      </div>
  );
};

export default Cover