import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../config/config";
import Player from '@vimeo/player';

const Hero = () => {
  const iframeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to track video playback
  const [vimeoPlayer, setVimeoPlayer] = useState(null);

  // Handle window resize to update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize Vimeo Player and handle video playback events
  useEffect(() => {
    if (iframeRef.current && !vimeoPlayer) {
      const player = new Player(iframeRef.current);
      setVimeoPlayer(player);

      // Listen for the 'play' event to confirm video playback has started
      player.on('play', () => {
        setIsVideoPlaying(true);
      });

      // Fallback: Use 'timeupdate' to confirm video is progressing
      player.on('timeupdate', () => {
        setIsVideoPlaying(true); // Ensure state is updated if play event is missed
      });

      // Handle errors to keep background image if video fails
      player.on('error', () => {
        console.error('Vimeo video failed to load or play');
      });

      // Attempt to autoplay the video
      player.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      if (vimeoPlayer) {
        vimeoPlayer.off('play');
        vimeoPlayer.off('timeupdate');
        vimeoPlayer.off('error');
      }
    };
  }, [vimeoPlayer]);

  return (
    <>
      <div>
        <div style={{ position: "relative", paddingBottom: isMobile ? '100%' : '56.25%', overflow: "hidden" }}>
          {/* Background image displayed until video starts playing */}
          {!isVideoPlaying && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:  window.innerWidth > 768 ? `url(${API_URL}images/aero-gurgaon/hero/video_desktop_bg.webp)` : `url(${API_URL}images/aero-gurgaon/hero/video_sm_bg.webp)`, // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
              aria-hidden="true"
            />
          )}
          <iframe
            ref={iframeRef}
            src={isMobile
              ? "https://player.vimeo.com/video/1078911802?background=1&autopause=0&title=0&byline=0&portrait=0"
              : "https://player.vimeo.com/video/1078294218?background=1&autopause=0&title=0&byline=0&portrait=0"}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2, // Ensure iframe is above the background
            }}
            title="MVN Aero One Walkthrough"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;