import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import * as CONFIG from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [videoFinished, setVideoFinished] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { title, desc } = data.living_room_video;

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    let scrollTriggerInstance;

    const disableScrolling = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScrolling = () => {
      document.body.style.overflow = "";
    };

    const playVideo = () => {
      video.play().catch((error) => {
        console.error("Video playback failed", error);
      });
    };

    const handleVideoEnd = () => {
      console.log("Video ended");
      enableScrolling();
      setVideoFinished(true); // Mark video as finished
      playVideo(); // Restart video to enable looping
    };

    const setupScrollTrigger = () => {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        end: "bottom top",
        scrub: false,
        onEnter: () => {
          console.log("ScrollTrigger entered");
          if (!videoFinished) {
            disableScrolling();
            playVideo();
          }
        },
        onUpdate:(self)=>{
          console.log('self', self);
          if(self.direction === 1 && !videoFinished){
            // Prevent scrolling down
            disableScrolling()
          } else {
            enableScrolling(); // Allow scrolling up
          }
        },
        onLeaveBack: () => {
          console.log("ScrollTrigger leave back");
          enableScrolling();
          // video.pause();
        },
        onLeave: () => {
          console.log("ScrollTrigger leave");
          enableScrolling();
          // video.pause();
        },
      });
    };

    // Wait for video metadata to load before initializing ScrollTrigger
    if (video.readyState >= 1) {
      console.log("Video metadata already loaded");
      setupScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", () => {
        console.log("Video metadata loaded");
        setupScrollTrigger();
      });
    }

    // Add video ended listener
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("loadedmetadata", setupScrollTrigger);
    };
  }, [videoFinished]);

  const handleVideoLoaded = () => {
    setLoading(false); // Hide loader after the video is fully loaded
  };

  return (
    <div className="section living_room_video_section design1 pb-0" ref={sectionRef}>
      <video
        ref={videoRef}
        src={`${CONFIG.VIDEO_URL}living-room/desktop.mp4`}
        type="video/mp4"
        muted
        autoPlay={false}
        playsInline
        preload="metadata"
        loop={videoFinished} // Dynamically set loop based on state
        onLoadedMetadata={handleVideoLoaded}
      />
      <Container>
        <div className="about">
          <CustomCard title={title} desc={desc} />
        </div>
      </Container>
    </div>
  );
};

export default LivingRoomVideoGurugram;
