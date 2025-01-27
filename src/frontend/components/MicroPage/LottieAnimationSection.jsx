import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import PartyLoader from "../../../common/Loader/micro/partyLoader/Index";
import Watermark from "../../../common/watermark/Index";
import lottie from "lottie-web";
import { useMatches } from "../../../theme/theme";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LottieAnimationSection = ({ data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const lottieContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);  // Initially set to true
  const [animationData, setAnimationData] = useState(null);
  const { isMobile } = useMatches();
  const { second_title, desc, path } = data;

  // Dynamically load JSON animation data using fetch
  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const jsonPath = isMobile ? path.mobile : path.desktop;
        const response = await fetch(jsonPath);
        const data = await response.json();
        
        setAnimationData(data);  // Update animation data
      } catch (error) {
        console.error("Error loading animation data:", error);
        setLoading(false);  // Stop loader if animation fails
      }
    };

    loadAnimationData();
  }, [isMobile, path]);

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
      start: "top 95px",
      end: `+=${window.innerHeight * 5}`,
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

    // Event listener for when Lottie is fully initialized
    lottieAnimation.addEventListener("DOMLoaded", () => {
      console.log("Lottie animation is fully loaded.");
      setLoading(false);  // Set loading to false when Lottie is fully loaded
      onLoadComplete && onLoadComplete();  // Call onLoadComplete if provided
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
    <div className="section peacock_section party_section pb-0">
      {loading ? (
        <PartyLoader />
      ) : (
        <>
          <div ref={containerRef} className="frames_content">
            <div className="position-relative h_sm_100">
              <div className="position-relative h_sm_100">
                <Watermark />
                <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>
              </div>
            </div>
          </div>
          <Container>
            <div className="about">
              <CustomCard className="px-0 pb-0" title={second_title} desc={desc} />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default LottieAnimationSection;
