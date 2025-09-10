import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImgMail from "../../assets/images/icons/email.png";
import GurgaonLoader from "../../../common/Loader/Homepage/Index";
import { useMatches } from "../../../theme/theme";

gsap.registerPlugin(ScrollTrigger);

const HomepageVideo = ({ data }) => {
  const [images, setImages] = useState([]);
  const [mobile, setMobile] = useState(false);

  const [loading, setLoading] = useState(true); // Loader state
  const [totalFrames, setTotalFrames] = useState(0);
  const containerRef = useRef(null);
  const frameRefs = useRef([]);
  const mouseScrollRef = useRef();
  const { isMobile } = useMatches();

  useEffect(() => {
    if (loading) {
      // Add overflow: hidden to the body when heroLoaded is false
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when heroLoaded is true
      document.body.style.overflow = "";
    }

    // Cleanup function to reset the body overflow if the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    // Determine if it's mobile or desktop
    if (isMobile) {
      setMobile(true);
    }

    // Set total frames dynamically
    let frameCount = isMobile ? 10 : 10;
    setTotalFrames(frameCount);
  }, [data]);

  useEffect(() => {
    // Only preload images once totalFrames is set
    if (totalFrames === 0) return;

    let folderPath = isMobile
      ? "assets/images/micro/hero/mobile/"
      : "assets/images/micro/hero/desktop/";

    // Preload images
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${folderPath}${i}.webp`;

      // Track when each image loads
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages); // Set images after all are loaded
          setLoading(false); // Hide loader
        }
      };

      loadedImages.push(img);
    }
  }, [totalFrames, data]);

  useEffect(() => {
    // Reinitialize ScrollTrigger only after all images are loaded
    if (loading || images.length !== totalFrames) return;

    // Image sequence animation
    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`, // Extend scroll distance to fit more frames
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));

        // Ensure frames update correctly
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === frameIndex ? "block" : "none";
        });
      },
      onLeave: () => {
        // Ensure the last frame stays visible when scrolling ends
        frameRefs.current.forEach((img, index) => {
          if (img)
            img.style.display = index === totalFrames - 1 ? "block" : "none";
        });
      },
      onLeaveBack: () => {
        // Ensure the first frame stays visible when scrolling back to the top
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === 0 ? "block" : "none";
        });
      },
    });

    return () => {
      scrollAnimation.kill();
    };
  }, [loading, images, totalFrames]);

  return (
    <>
      <section className="section micro_hero_section p-0" aria-label="Hero Section">
        {/* Show Loader */}
        {loading && <GurgaonLoader mobile={mobile} />}

        {!loading && (
          <div ref={containerRef} className="frames_content">
            {images?.map((img, index) => (
              <img
                key={index}
                ref={(el) => (frameRefs.current[index] = el)}
                src={img.src}
                alt={`Frame ${index}`}
                className="frame"
                style={{ display: index === 0 ? "block" : "none" }}
              />
            ))}

            <div id="scroll-wrapper">
              <div id="scroll-wrapper-inner">
                <div id="scroll-title">Scroll Down</div>
                <div className="scroll-down-dude"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HomepageVideo;
