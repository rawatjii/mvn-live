import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from "../Card";
import { Container } from "react-bootstrap";
import * as CONFIG from "../../../config/config";

const subscribeImg = `${CONFIG.API_URL}images/icons/subscribe_btn.webp`

gsap.registerPlugin(ScrollTrigger);

const Walkthrough = React.memo(({ data }) => {
  const [videoSrc, setVideoSrc] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);

  const { second_title, desc, src } = data;

  const channelUrl = CONFIG.YOUTUBE_URL;

  useEffect(() => {
    setVideoSrc("https://www.youtube.com/embed/qanbwLmZt4s?loop=1&mute=1&playlist=qanbwLmZt4s");
  }, []);

  // Lazy-load YouTube iframe when walkthrough enters viewport
  // useEffect(()=>{
  //   if(!src || iframeLoaded) return;

  //   const walkthroughIframe = containerRef.current.querySelector("iframe");

  //   if(!walkthroughIframe) return;

  //   const trigger = ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     start: "top bottom",
  //     onEnter:()=>{
  //       if(iframeRef.current && !iframeLoaded){
  //         const autoplaySrc = src ? src : videoSrc;

  //         iframeRef.current.src = autoplaySrc;

  //         setIframeLoaded(true);
  //       }
  //     },
  //     once: true,
  //   })

  //   return ()=>trigger.kill();
  // }, [])

  return (
    <section ref={containerRef} className="section walkthrough_section new_height" aria-label="Walkthrough Section">
      <div style={{backgroundImage: `url(${CONFIG.IMAGE_URL}loader/aeroone-gurgaon/largeElevation/largeBg.webp)`, backgroundSize: 'cover',backgroundPosition: 'bottom'}}>
        <iframe
          ref={iframeRef}
          src={src ? src : videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width="100"
          height="100"
          // playsInline
        
        ></iframe>
      </div>

      <a href={channelUrl} target="_blank" className="d-table mx-auto mt-4">
        <img src={subscribeImg} role="button" tabIndex="0" alt="mvn subscribe btn" className="img-fluid subscribe_style1" />
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
