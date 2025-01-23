import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import CustomCard from "../Card";
import PeacockLoader from "../../../common/Loader/micro/peacockLoader/Index";
import Watermark from "../../../common/watermark/Index";
import * as CONFIG from '../../../config/config'
import ScrollDown from "../../../common/scrollDown/Index";

gsap.registerPlugin(ScrollTrigger);

const PeacockSection = ({ data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const [images, setImages] = useState([]);
  const frameRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading

  const totalFramesDesktop = 256;
  const totalFramesMobile = 256;

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
  }, []); // Dependency array doesn't include data to ensure it's initialized once.

  // Load images
  useEffect(() => {
    if (isMobile === null) return; // Wait until `isMobile` is determined.

    const totalFrames = isMobile ? totalFramesMobile : totalFramesDesktop;
    const imagePath = isMobile ? "assets/images/peacock/mobile/" : "assets/images/peacock/mobile/";

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${imagePath}${i}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setLoading(false); // All images loaded, hide loader.
          onLoadComplete()
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [isMobile]); // Depend on `isMobile` to reload images when the state changes.

  // GSAP Animation only for mobile
  useEffect(() => {
    if (images.length === 0 || loading || !isMobile) return; // Skip if no images, still loading, or not mobile.

    // Initialize ScrollTrigger animation
    const totalFrames = totalFramesMobile;

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
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

  const { title, desc } = data.video1;

  return (
    <div className="section peacock_section pb-0" id="peacockSection">

      {/* Show loader if still loading */}
      {loading && (
        <PeacockLoader />
      )}

      {!loading && (
        <>
          <div ref={containerRef} className="frames_content">
            <div className="image_col position-relative">
              <Watermark className={isMobile ? 'style1' : 'style2'} />
              {isMobile && images.map((img, index) => (
                <img
                  key={index}
                  ref={(el) => (frameRefs.current[index] = el)}
                  src={img.src}
                  alt={`Frame ${index}`}
                  className="frame"
                  style={{ display: index === 0 ? "block" : "none" }}
                />
              ))}

              {!isMobile && (
                <img src={CONFIG.IMAGE_URL + 'peacock/peacock.webp'} className="img-fluid peacock_img" />
              )}
            </div>

            <ScrollDown className="color-black" />

          </div>

          <Container >
            <div className='about'>
                <CustomCard
                className="p_sm_0"
                  title="EXPERIENCE THE GRANDEUR OF THE LIVING ROOM WITH 360° PANORAMIC VIEWS" 
                  desc="Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings."  
                />
            </div>

          </Container>
        </>
      )}
    </div>
  );
};

export default PeacockSection;
