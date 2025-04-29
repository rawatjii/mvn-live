import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../config/config";

const MvnMall = ()=>{
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
      <section className="section pb-0">
        <div style={{ position: "relative", paddingBottom: isMobile ? '56.25%' : '56.25%', overflow: "hidden" }}>
          <iframe
            ref={iframeRef}
            src={isMobile 
              ? "https://player.vimeo.com/video/1079671210?background=1&autopause=0&title=0&byline=0&portrait=0" 
              : "https://player.vimeo.com/video/1079671210?background=1&autopause=0&title=0&byline=0&portrait=0"}
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

        <div className="home-about-content pb-0">
              <img src={`${API_URL}images/icons/heading-icon-img.webp`} alt="mvn head icon" className="img-fluid title_plane1"/>
              <h4 className="title_style1 text-center">Shopping ignites the senses, and entertainment stirs the soul.</h4>
              <p className="des_style1 text-center">
              A monumental destination where luxury shopping, world-class entertainment, and unparalleled experiences seamlessly blend, an oasis of sophistication and wonder, where every moment exceeds the extraordinary
              </p>
            </div>

        
      </section>



    </>
  )
}

export default MvnMall;