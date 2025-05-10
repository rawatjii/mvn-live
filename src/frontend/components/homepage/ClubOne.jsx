import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../config/config";

const ClubOne = ()=>{
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
        <div className="home-about-content pt-0">
              <img src={`${API_URL}images/icons/heading-icon-img.webp`} alt="mvn head icon" className="img-fluid title_plane1"/>
              <h4 className="title_style1 text-center">Where leisure meets quiet grandeur, and indulgence is effortlessly within reach</h4>
            </div>

        <div style={{ position: "relative", paddingBottom: isMobile ? '56.25%' : '56.25%', overflow: "hidden" }}>
          <iframe
            ref={iframeRef}
            src={isMobile 
              ? "https://player.vimeo.com/video/1079670411?autopause=0&loop=1&title=0&byline=0&portrait=0" 
              : "https://player.vimeo.com/video/1079670411?autopause=0&loop=1&title=0&byline=0&portrait=0"}
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
              
              <p className="des_style1 text-center">
              A realm of distinguished privilege, where artistry, grandeur, and refinement are woven into every detail. An exclusive sanctuary reserved for those who live life without compromise.
              </p>
            </div>

        
      </section>



    </>
  )
}

export default ClubOne;