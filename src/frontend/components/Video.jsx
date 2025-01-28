import React, { useEffect, useRef, useState } from 'react'

function Video({videoSrc, videoPoster}) {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true); // Initially visible
  const [isFirstInteraction, setIsFirstInteraction] = useState(true); // Tracks first interaction
  const buttonTimeout = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }

    // Mark the first interaction as complete
    if (isFirstInteraction) {
      setIsFirstInteraction(false);
    }
  };

  const handleMouseEnter = () => {
    setShowButton(true);
    clearTimeout(buttonTimeout.current); // Clear any existing timeout
  };

  const handleMouseLeave = () => {
    if (!isFirstInteraction) {
      buttonTimeout.current = setTimeout(() => {
        setShowButton(false);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(buttonTimeout.current); // Cleanup timeout on unmount
    };
  }, []);

  return (
    <div
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="custom-video"
        src={videoSrc}
        onClick={handlePlayPause}
        poster={videoPoster}
      ></video>
      {showButton && (
        <button type="button" className="play-pause-btn" onClick={handlePlayPause}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
      )}
    </div>
  );
}

export default Video