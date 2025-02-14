import React, { useState, useEffect, useRef, useCallback } from "react";
import CustomCard from "../Card";
import { Container } from "react-bootstrap";
import subscribeImg from '../../../frontend/assets/images/icons/subscribe_btn.webp'
import * as CONFIG from "../../../config/config";

const Walkthrough = React.memo(({ data }) => {
  const [videoSrc, setVideoSrc] = useState("");
  const { second_title, desc } = data;

  const channelUrl = CONFIG.YOUTUBE_URL;

  useEffect(() => {
    setVideoSrc("https://www.youtube.com/embed/9CHcJAveejU?autoplay=1&loop=1&mute=1&playlist=9CHcJAveejU");
  }, []);

  return (
    <section className="section walkthrough_section new_height" aria-label="Walkthrough Section">
      <div style={{backgroundImage: `url(${CONFIG.IMAGE_URL}loader/aeroone-gurgaon/largeElevation/largeBg.webp)`, backgroundSize: 'cover',backgroundPosition: 'bottom'}}>
        <iframe src={videoSrc} 
          title="YouTube video player"
          frameBorder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width="100"
          height="100"
          playsInline
        
        ></iframe>
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
