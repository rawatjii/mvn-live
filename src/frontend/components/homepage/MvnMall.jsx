import React, { useRef, useState } from "react";
import { API_URL } from "../../../config/config";

const MvnMall = ({data})=>{
  const iframeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { heading, short_description, alt } = data;

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
      <section className="section">
      <div className="home-about-content pt-0">
              <img src={`${API_URL}images/icons/heading-icon-img.webp`} alt="mvn head icon" className="img-fluid title_plane1"/>
              <h4 className="title_style1 text-center">{heading}</h4>
            </div>

        <div style={{ position: "relative", paddingBottom: isMobile ? '56.25%' : '56.25%', overflow: "hidden" }}>
          <iframe
            ref={iframeRef}
            src={isMobile 
              ? "https://www.youtube.com/embed/CbmkQBZuvTw?loop=1&mute=1&playlist=CbmkQBZuvTw" 
              : "https://www.youtube.com/embed/CbmkQBZuvTw?loop=1&mute=1&playlist=CbmkQBZuvTw"}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="MVN Aero One Walkthrough"
          />
        </div>

        <div className="home-about-content pb-0">
              
              <p className="des_style1 text-center">
              {short_description}
              </p>
            </div>

            {/* <div className="awards text-center mt-5">
            <img src={`${API_URL}mvn-offer-without-logo.webp`} alt="awards icon"  height={"150"} />
          </div> */}
      </section>



    </>
  )
}

export default MvnMall;