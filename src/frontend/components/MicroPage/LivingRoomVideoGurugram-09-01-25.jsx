import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import { Container } from "react-bootstrap";
import * as CONFIG from "../../../config/config";
import ScrollDown from "../../../common/scrollDown/Index";
import CustomCard from "../Card";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const sectionRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  const { title, desc } = data.living_room_video;

  // Dynamically import JSON animation data
  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const importedData = await import(
          "../../../../public/assets/json-frame/aeroone-gurgaon1/livingRoom/desktop.json"
        );
        setAnimationData(importedData.default);
      } catch (error) {
        console.error("Error loading animation data:", error);
      }
    };

    loadAnimationData();
  }, []);

  // Initialize Lottie and ScrollTrigger
  useEffect(() => {
    if (!animationData || !lottieContainerRef.current || !containerRef.current) {
      onLoadComplete && onLoadComplete();
      return;
    }

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
      trigger: sectionRef.current,
      start: "top 79px",
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
      console.log("Peacock Lottie animation is fully loaded.");
      onLoadComplete && onLoadComplete();
    });

    return () => {
      scrollAnimation.kill();
      lottieAnimation.destroy();
    };
  }, [animationData, onLoadComplete]);

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
    <div className="section sliding_door_section p-0" ref={sectionRef} id="peacockSection">
      <div ref={containerRef} className="frames_content">
        <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>
        <ScrollDown className="color-black" />
      </div>

      <Container>
        <div className="about">
        <CustomCard title={title} desc={desc} className="px_sm_0" />
        </div>
      </Container>
    </div>
  );
};


export default LivingRoomVideoGurugram;
