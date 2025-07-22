import React, { useRef, useState, useEffect, useCallback } from "react";
import { API_URL } from "../../../config/config";

const Hero = React.memo(({ data }) => {
  const iframeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video playback

  const { heading, sub_heading, alt } = data;

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
    console.log('hero window resie');
  }, []);

  // Handle window resize
  useEffect(() => {
    const debounceResize = ()=>{
      setTimeout(()=>{
        handleResize();
      }, 2000);
    }

    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  // Load YouTube IFrame API and set up player
  useEffect(() => {
    // Load YouTube IFrame API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when API is ready
    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsVideoPlaying(true); // Video is playing, hide placeholder
            }
          },
        },
      });
    };

    return () => {
      // Cleanup (optional)
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Static placeholder image */}
      {!isVideoPlaying && (
        <img
          src={
            isMobile
              ? `${API_URL}images/homepage/hero/hero_img_sm.webp`
              : `${API_URL}images/homepage/hero/hero_img.webp`
          }
          alt={alt || "Loading video..."}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          paddingBottom: isMobile ? "100%" : "56.25%",
          overflow: "hidden",
        }}
      >
        <iframe
          ref={iframeRef}
          src={`${isMobile ? sub_heading : heading}?enablejsapi=1&autoplay=1`} // Enable JS API and autoplay
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
          title="MVN Aero One Walkthrough"
          loading="lazy"
        />
      </div>
    </div>
  );
});

export default Hero;