import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import PartyLoader from "../../../common/Loader/micro/partyLoader/Index";
import Watermark from "../../../common/watermark/Index";
import lottie from "lottie-web";
import InitialLoading from "../../skeleton/Initial/Index";
import ScrollDown from "../../../common/scrollDown/Index";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MicroHero = ({ isMobile, data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const lottieContainerRef = useRef(null);
  const scrollDownRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  const { title, desc } = data.video3;

  // Dynamically import the correct JSON animation data
  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const importedData = isMobile
          ? await import("../../../../public/assets/json-frame/aeroone-gurgaon1/Hero/mobile.json")
          : await import("../../../../public/assets/json-frame/aeroone-gurgaon1/Hero/desktop.json");

        setAnimationData(importedData.default);
      } catch (error) {
        console.error("Error loading animation data:", error);
      }
    };

    loadAnimationData();
  }, [isMobile]);

  // Initialize Lottie and ScrollTrigger
  useEffect(() => {
    if (!animationData || !lottieContainerRef.current || !containerRef.current) return;

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
        const isMobileView = window.innerWidth <= 768;
        const svgElement = lottieContainerRef.current.querySelector(".jpg");
        // if (svgElement) {
        //   svgElement.setAttribute(
        //     "transform",
        //     isMobileView
        //       ? "matrix(0.3437773883342743,0,0,0.3437773883342743,50.0512752532959,-205.71138763427734)"
        //       : "matrix(0.2715912461280823,0,0,0.2715912461280823,-178.04544067382812,-439.8266296386719)"
        //   );
        // }
        lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
      },
      onLeaveBack: () => {
        lottieAnimation.goToAndStop(0, true);
      },
    });

    // Event listener for when Lottie is fully initialized
    lottieAnimation.addEventListener("DOMLoaded", () => {
      console.log("Lottie animation is fully loaded.");
      onLoadComplete && onLoadComplete();
    });

    initializeScrollDownPin();

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

  const initializeScrollDownPin = () => {
      const canvas = lottieContainerRef.current;
      const framesContent = document.querySelector('.frames_content');
      
      // Get the height of the frames content
      const framesContentHeight = framesContent.offsetHeight;
      // localStorage.setItem('navbar_scroll_height',  framesContentHeight);
  
      // Create ScrollTrigger for scrollDownRef to pin it until canvas reaches 50%
      const scrollDownPin = ScrollTrigger.create({
        trigger: canvas,
        start: "top top", // Pin scrollDownRef when the canvas starts
        end: () => `+=${framesContentHeight - window.innerHeight}`, // Unpin when canvas reaches 50% scroll
        pin: scrollDownRef.current, // Pin the scroll-down indicator
        pinSpacing: false, // Prevent extra space when pinning
      });
    };

  return (
    <div className="section micro_hero_section canvas_section1 p-0">
      <div ref={containerRef} className="frames_content">
        <div className="microsite-scrolldown microsite-scrolldown_1" ref={scrollDownRef} >
          <div id="scroll-wrapper-inner">
            <div id="scroll-title">Scroll Down</div>
            <div className="scroll-down-dude"></div>
          </div>
        </div>
        <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>

        {/* <ScrollDown className="color-black" /> */}

        
      </div>
      {/* <ScrollDown className="color-black" /> */}
      
    </div>
  );
};

export default MicroHero;
