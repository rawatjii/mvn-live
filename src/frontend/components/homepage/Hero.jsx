import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../config/config";

const Hero = ()=>{
  const iframeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add event listener for window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <>
      <div>
        <div style={{ position: "relative", paddingBottom: isMobile ? '100%' : '56.25%', overflow: "hidden" }}>
          <iframe
            ref={iframeRef}
            src={isMobile 
              ? "https://player.vimeo.com/video/1078911802?background=1&autopause=0&title=0&byline=0&portrait=0" 
              : "https://player.vimeo.com/video/1078294218?background=1&autopause=0&title=0&byline=0&portrait=0"}
            // src={isMobile 
            //   ? "https://player.vimeo.com/video/1078921802?background=1&autopause=0&title=0&byline=0&portrait=0" 
            //   : "https://player.vimeo.com/video/1078294218?background=1&autopause=0&title=0&byline=0&portrait=0"}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="MVN Aero One Walkthrough"
          />
        </div>

        
      </div>

      {/* <div className="parent-box-div">
        <a
          href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
          className="hero-banner-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isMobile ? `${API_URL}images/homepage/hero/hero_img_sm.webp` : `${API_URL}images/homepage/hero/hero_img.webp`}
            alt="Hero Banner"
            className="img-fluid hero-banner"
          />
        </a>

        <div className="slider-content">
          <h1 className="slider-heading">Enter The Experience Center</h1>
          <div className="btns">
            <Link
              to={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
              className="btn ink-btn btn_style3 r_100"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div> */}


    </>
  )
}

export default Hero;