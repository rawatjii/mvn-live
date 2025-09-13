import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../config/config";

const ClubOne = () => {
  const iframeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when iframe is clicked
  useEffect(() => {
    const iframe = iframeRef.current;
    
    const handleIframeClick = (e) => {
      // Prevent any default scroll behavior
      e.preventDefault();
      e.stopPropagation();
    };

    if (iframe) {
      iframe.addEventListener('click', handleIframeClick);
      iframe.addEventListener('touchstart', handleIframeClick);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('click', handleIframeClick);
        iframe.removeEventListener('touchstart', handleIframeClick);
      }
    };
  }, []);

  return (
    <>
      <section className="section pb-0">
        <div className="home-about-content pt-0">
          <img 
            src={`${API_URL}images/icons/heading-icon-img.webp`} 
            alt="mvn head icon" 
            className="img-fluid title_plane1"
          />
          <h4 className="title_style1 text-center">
            Where leisure meets quiet grandeur, and indulgence is effortlessly within reach
          </h4>
        </div>

        <div 
          style={{ 
            position: "relative", 
            paddingBottom: isMobile ? '56.25%' : '56.25%', 
            overflow: "hidden",
            // Add these styles to prevent scroll issues
            isolation: 'isolate',
            zIndex: 1
          }}
        >
          <iframe
            ref={iframeRef}
            src={isMobile
              ? "https://www.youtube.com/embed/kjzkEaqHkGo?loop=1&mute=1&playlist=kjzkEaqHkGo&rel=0&modestbranding=1&showinfo=0"
              : "https://www.youtube.com/embed/kjzkEaqHkGo?loop=1&mute=1&playlist=kjzkEaqHkGo&rel=0&modestbranding=1&showinfo=0"}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%",
              // Add these styles to prevent scroll
              pointerEvents: 'auto',
              userSelect: 'none'
            }}
            title="MVN Aero One Walkthrough"
            // Add loading attribute
            loading="lazy"
          />
        </div>

        <div className="home-about-content pb-0">
          <p className="des_style1 text-center">
            A realm of distinguished privilege, where artistry, grandeur, and refinement are woven into every detail. An exclusive sanctuary reserved for those who live life without compromise.
          </p>
        </div>
      </section>
    </>
  );
};

export default ClubOne;