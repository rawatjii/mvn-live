import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import * as CONFIG from "../../../config/config";
import PeacockLoader from "../../../common/Loader/micro/peacockLoader/Index";
import LivingRoomVideoLoader from "../../../common/Loader/micro/livingRoomVideo/Index";
import ScrollDown from "../../../common/scrollDown/Index";
import InitialLoading from "../../skeleton/Initial/Index";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [videoFinished, setVideoFinished] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const frameRefs = useRef([]);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { title, desc } = data.living_room_video;

  const totalFramesDesktop = 126;
  const totalFramesMobile = 126;

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); 

  // Load images
  useEffect(() => {
    if (isMobile === null) return; // Wait until `isMobile` is determined.

    const totalFrames = isMobile ? totalFramesMobile : totalFramesDesktop;
    const imagePath = isMobile ? "assets/videos/living-room/mobile/" : "assets/videos/living-room/desktop/";

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${imagePath}${i}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setLoading(false); // All images loaded, hide loader.
          onLoadComplete();
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [isMobile]); // Depend on `isMobile` to reload images when the state changes.

  // GSAP Animation
  useEffect(() => {
    if (images.length === 0 || loading) return;

    // Initialize ScrollTrigger animation
    const totalFrames = isMobile ? totalFramesMobile : totalFramesDesktop;

    const scrollAnimation = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80px",
      end: `+=${window.innerHeight * 4}`,
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        if (self.progress > 0.1) {
          frameRefs.current.forEach((img, index) => {
            if (img) img.style.display = index === frameIndex ? "block" : "none";
          });
        }
      },
      onLeaveBack: () => {
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === 0 ? "block" : "none";
        });
      },
      onLeave: () => {
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === totalFrames - 1 ? "block" : "none";
        });
      },
    });
  
    // Refresh ScrollTrigger to account for loaded content
    ScrollTrigger.refresh();
  
    return () => {
      // Clean up ScrollTrigger instance
      scrollAnimation.kill();
    };
  }, [images, isMobile, loading]);

  return (
    <>
    {/* Show loader if still loading */}
    {loading && (
      <LivingRoomVideoLoader />
      // <InitialLoading className="style1" />
    )}

    {!loading && (
      <>
        {/* <CustomCard className="style2" title={title} /> */}
          <div className="section living_room_video_section design1 pb-0" ref={sectionRef} id="livingRoomSlidingDoor">
          
            <div ref={containerRef} className="frames_content">
              {images.map((img, index) => (
                <img
                  key={index}
                  ref={(el) => (frameRefs.current[index] = el)}
                  src={img.src}
                  alt={`Frame ${index}`}
                  className="frame"
                  style={{ display: index === 0 ? "block" : "none", }}
                  
                />
              ))}

            <ScrollDown />

            </div>
            <Container>
              <div className="about">
                <CustomCard title={title} desc={desc} className="px_sm_0" />
              </div>
            </Container>
          </div>
        </>
      )}
     
    </>
  );
};

export default LivingRoomVideoGurugram;
