import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import MasterBedroomLoader from "../../../common/Loader/micro/masterBedroomLoader/Index";
import Watermark from "../../../common/watermark/Index";
import lottie from "lottie-web";
import Logomark from "../../../common/logomark/Index";
import { useMatches } from "../../../theme/theme";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MasterBedroom = ({  data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const lottieContainerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);
  const { title, desc } = data.masterBedroom;
  const { isMobile } = useMatches();

  // Dynamically import the correct JSON animation data
  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const importedData = isMobile
          ? await import(
              "../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Mobile/data.json"
            )
          : await import(
              "../../../../public/assets/json-frame/aeroone-gurgaon1/Panther/Desktop/data.json"
            );

        setAnimationData(importedData.default);
      } catch (error) {
        console.error("Error loading animation data:", error);
      }
    };

    loadAnimationData();
  }, [isMobile]);

  // Initialize Lottie and ScrollTrigger
  useEffect(() => {
    if (!animationData || !lottieContainerRef.current || !containerRef.current)
      return;

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
      start: "top 90px",
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

    // Set loading to false after both the animation and Lottie are ready
    onLoadComplete();

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
    <div className="section peacock_section pb-0 master-bed-room">
      <div ref={containerRef} className="frames_content">
        <Watermark className="style3" />
        <Logomark className={`${isMobile ? "left sm style3" : "left"}`} />
        <div
          ref={lottieContainerRef}
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
      <div id="scroll-wrapper" className="microsite-scrolldown">
        <div id="scroll-wrapper-inner ">
          <div id="scroll-title">Scroll Down</div>
          <div className="scroll-down-dude"></div>
        </div>
      </div>

      <Container>
        <div className="about">
          <CustomCard className="px_sm_0 pb-0" title={title} desc={desc} />
        </div>
      </Container>
    </div>
  );
};

export default MasterBedroom;
