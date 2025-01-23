import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import * as CONFIG from "../../../config/config";
import CustomCard from "../Card";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideo = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [firstPlayEnded, setFirstPlayEnded] = useState(false); // To track if the video finished once
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

    const pauseVideo = () => {
      video.pause();
    };

    const handleVideoEnd = () => {
      setFirstPlayEnded(true); // Mark that the video has finished once
      enableScrolling(); // Allow scrolling after video ends
      video.loop = true; // Enable looping after the first playback
    };

    const setupScrollTrigger = () => {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: video,
        start: "top top",
        end: () => `+=${video.duration * window.innerHeight}`, // Adjust end based on video duration
        pin: true,
        scrub: false,
        onEnter: () => {
          disableScrolling();
          playVideo();
        },
        onLeaveBack: () => {
          pauseVideo();
        },
        onEnterBack: () => {
          if (!firstPlayEnded) {
            disableScrolling();
          }
          playVideo();
        },
        onLeave: () => {
          if (!firstPlayEnded) {
            pauseVideo();
          }
        },
      });

      video.addEventListener("ended", handleVideoEnd);
    };

    video.addEventListener("loadedmetadata", () => {
      setupScrollTrigger();
    });

    return () => {
      enableScrolling();
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [firstPlayEnded]);

  const handleVideoLoaded = () => {
    setLoading(false); // Hide the loader once the video has loaded
  };

  return (
    <div className="section living_room_video_section pb-0" ref={sectionRef}>
      {loading && (
        <div className="loader">
          <div className="spinner">Loading...</div>
        </div>
      )}

      <video
        ref={videoRef}
        src={`${CONFIG.VIDEO_URL}living-room/mobile.mp4`}
        type="video/mp4"
        muted
        autoPlay={false}
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoaded}
        loop={false} // Initially, the video doesn't loop
      />

      {!loading && (
        <Container>
          <div className="about">
            <CustomCard title={title} desc={desc} />
          </div>
        </Container>
      )}
    </div>
  );
};

export default LivingRoomVideo;
