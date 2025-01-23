import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import { Container } from "react-bootstrap";
import * as CONFIG from "../../../config/config";
import ScrollDown from "../../../common/scrollDown/Index";
import CustomCard from "../Card";
import Watermark from "../../../common/watermark/Index";

gsap.registerPlugin(ScrollTrigger);

const PeacockSection = ({ isMobile, data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const lottieContainerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  const { title, desc } = data.video3;

  // Dynamically import JSON animation data for mobile
  useEffect(() => {
    if (isMobile) {
      const loadAnimationData = async () => {
        try {
          const importedData = await import(
            "../../../../public/assets/json-frame/aeroone-gurgaon1/Peacock/mobile.json"
          );
          setAnimationData(importedData.default);
        } catch (error) {
          console.error("Error loading animation data:", error);
        }
      };

      loadAnimationData();
    }
  }, [isMobile]);

  // Initialize Lottie and ScrollTrigger for mobile
  useEffect(() => {
    if (!isMobile || !animationData || !lottieContainerRef.current || !containerRef.current) {
      onLoadComplete();
      return;
    };

    const lottieAnimation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      animationData,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        clearCanvas: true,
      },
    });

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 3}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalFrames = lottieAnimation.totalFrames;
        const frameIndex = Math.floor(progress * (totalFrames - 1));
        lottieAnimation.goToAndStop(frameIndex, true);
      },
      onLeave: () => {
        lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
      },
      onLeaveBack: () => {
        lottieAnimation.goToAndStop(0, true);
      },
    });

    lottieAnimation.addEventListener("DOMLoaded", () => {
      console.log("peacock Lottie animation is fully loaded.");
      onLoadComplete && onLoadComplete();
    });

    return () => {
      scrollAnimation.kill();
      lottieAnimation.destroy();
    };
  }, [isMobile, animationData, onLoadComplete]);

  // Title animation with GSAP
  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });
  }, []);

  return (
    <div className="section peacock_section p-0" id="peacockSection">
      <div ref={containerRef} className="frames_content">
        {isMobile ? (
          <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>
        ) : (
          <img
            src={`${CONFIG.IMAGE_URL}peacock/peacock.webp`}
            alt="Desktop Hero"
            className="img-fluid peacock_img"
            onError={(e) => {
              console.error("Desktop image failed to load:", e.target.src);
              e.target.style.display = "none";
            }}
          />
        )}
        <ScrollDown className="color-black" />
      </div>

      <Container>
        <div className="about">
        
          <CustomCard
            className="px_sm_0"
            title="EXPERIENCE THE GRANDEUR OF THE LIVING ROOM WITH 360° PANORAMIC VIEWS"
            desc="Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings."
          />
        </div>
      </Container>
    </div>
  );
};

export default PeacockSection;
