import React, { useState, useEffect, useRef, useCallback } from "react";
import CustomCard from "../Card";
import { Container } from "react-bootstrap";
import subscribeImg from '../../../frontend/assets/images/icons/subscribe_btn.webp'
import * as CONFIG from "../../../config/config";

const Walkthrough = React.memo(({ data }) => {
  const { src, second_title, desc } = data;

  const channelUrl = CONFIG.YOUTUBE_URL;

  const [videoSrc, setVideoSrc] = useState(src);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video state
  const playerRef = useRef(null);

  useEffect(() => {
    const initializePlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy(); // Clean up the old player
      }
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: getVideoIdFromUrl(videoSrc),
        events: {
          onStateChange: handleStateChange,
        },
      });
    };
  
    // Load the YouTube IFrame Player API if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      // Wait for API to be ready
      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }
  
    return () => {
      // Cleanup YouTube Player instance
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoSrc]); // Reinitialize player when videoSrc changes

  const getVideoIdFromUrl = useCallback((url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  });

  const handleStateChange = useCallback((event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsVideoPlaying(true); // Mark video as playing
    } else if ( event.data === window.YT.PlayerState.ENDED) {
      setIsVideoPlaying(false); // Mark video as not playing
    }
  });

  const handleRefresh = useCallback(() => {
    // Temporarily reset the videoSrc to an empty string to stop the video
    setVideoSrc("");
    
    // Reset videoSrc after 100ms to force iframe reload
    setTimeout(() => {
      setVideoSrc(src);
      setIsVideoPlaying(false);
    }, 10);
  });

  return (
    <section className="section walkthrough_section new_height" aria-label="Walkthrough Section">
      <div className="Walkthrough_video">
        {/* YouTube Video IFrame */}
        {src && (
          <div id="youtube-player">
            <iframe
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="560"
              height="315"
            ></iframe>
          </div>
        )}

        {/* Close Button */}
        {isVideoPlaying && (
          <button onClick={handleRefresh} className="Close_video">
            <img
              src={`${CONFIG.IMAGE_URL}icons/close.png`}
              alt="Close video button"
            />
            <span>Close</span>
          </button>
        )}
      </div>

      <a href={channelUrl} target="_blank" className="d-table mx-auto mt-4">
        <img src={subscribeImg} alt="mvn subscribe btn" className="img-fluid subscribe_style1" />
      </a> 

      <Container>
        <div className="about">
          {/* Custom Card Component */}
          <CustomCard
            className="px-0"
            title={second_title || " "} // Fallback text
            desc={desc || " "} // Fallback text
          />
        </div>
      </Container>
    </section>
  );
});

export default Walkthrough;
