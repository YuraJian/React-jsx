/* eslint-disable no-unused-vars */
import React, { createRef, useState } from "react";
import myVideo from "../assets/video_preview_h264.mp4";
import buttonStyles from "../styles/buttonStyles.css";

const VideoPlayer = () => {
  const videoRef = createRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="button__container">
      {console.log(videoRef)}
      <video ref={videoRef} src={myVideo}></video>
      <button onClick={playPause} className="play--button button">
        {isPlaying ? "||" : "►"}
      </button>
    </div>
  );
};

export default VideoPlayer;
