import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import PartyLoader from "../../../common/Loader/micro/partyLoader/Index";
import Watermark from "../../../common/watermark/Index";
import lottie from "lottie-web";
import { useMatches } from "../../../theme/theme";
import ScrollDown from "../../../common/scrollDown/Index";
import Logomark from "../../../common/logomark/Index";
import { BACKEND_IMAGE_URL } from "../../../config/config";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LottieAnimationSection = React.memo(
  ({
    separateScroll,
    backgroundImg,
    data,
    onLoadComplete,
    position,
    watermark,
    logomark,
    type,
    onBannerExit,
    isMainBanner,
    customClass,
    anClass,
    isBanner
  }) => {
    const containerRef = useRef(null);
    const titleRef = useRef();
    const lottieContainerRef = useRef(null);
    const [loading, setLoading] = useState(false); // Initially set to true
    const [animationData, setAnimationData] = useState(null);
    const { isMobile } = useMatches();
    const { sub_heading, description, json, showAwards, section_type, heading = undefined } = data;


    // Ref for the interseciton observer
    const observerRef = useRef(null);

    // Lazy load animation data when section comes into view

    // useEffect(() => {
    //   if(observerRef.current) return; // Avoid multiple observers

    //   observerRef.current = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting) {
    //         // Start loading the animation data when the section is in view
    //         loadAnimationData();
    //       }
    //     });
    //   }, { threshold: 0.25 }); // Trigger when 25% of the section is in view

    //   const target = containerRef.current;
    //   if (target) {
    //     observerRef.current.observe(target);
    //   }

    //   return () => {
    //     if (observerRef.current) {
    //       observerRef.current.disconnect(); // Cleanup observer when component unmounts
    //     }
    //   };

    // }, [])

    // Dynamically load JSON animation data using fetch
    useEffect(() => {
      const loadAnimationData = async () => {
        try {
          debugger;
          // const jsonPath = isMobile ? BACKEND_IMAGE_URL + json : BACKEND_IMAGE_URL + json;
          const jsonPath='uploads/project-section/1748325416834.json';
          const response = await fetch(jsonPath);
          const data = await response.json();

          setAnimationData(data); 
        } catch (error) {
          console.error("Error loading animation data:", error);
          setLoading(false); 
        }
      };

      loadAnimationData();
    }, [isMobile, json]);

    // Initialize Lottie and ScrollTrigger
    useEffect(() => {
      if (
        !animationData ||
        !lottieContainerRef.current ||
        !containerRef.current
      )
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
        start: isBanner
          ? `top ${isMobile ? "top" : "top"}`
          : `top ${isMobile ? "65px" : "top"}`,
        end: `+=${window.innerHeight * 2}`,
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
      if (isMainBanner) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "bottom top",
          toggleActions: "play none none reverse",
          onEnterBack: () => onBannerExit(false),
          onLeave: () => onBannerExit(true),
        });
      }

      // Event listener for when Lottie is fully initialized
      lottieAnimation.addEventListener("DOMLoaded", () => {
        console.log("Lottie animation is fully loaded.");
        setLoading(false); // Set loading to false when Lottie is fully loaded
        onLoadComplete && onLoadComplete(); // Call onLoadComplete if provided
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
      <div className="">
        {loading ? (
          <PartyLoader />
        ) : (
          <>
            <section
              className={`LottieAnimationContainer ${anClass}`}
              aria-label="LottieAnimation Section"
            >
              {(section_type !== 'party' && section_type !== 'masterbedroom' )&& heading && (
                <div className="heading_div mb_60 mb_sm_30">
                  <h4 className="title title_style1 text-center">{heading}</h4>
                </div>
              )}
              <div ref={containerRef}>
                <div className="frames_content">
                  <div className="position-relative h_sm_100">
                    <div className="position-relative h_sm_100">
                      <Watermark customClass={customClass} />
                      {/* <Logomark className={`left ${logomark ? logomark : null}`} /> */}
                      <div
                        ref={lottieContainerRef}
                        className={`Animation_height ${
                          isMainBanner && "isMainBanner"
                        } 
                        ${data.Custom_height}`}
                        style={{
                          backgroundImage: `url(${backgroundImg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  </div>

                  {(!type || type !== "style1") && !separateScroll && (
                    <ScrollDown className="color-black" />
                  )}
                </div>
                {separateScroll && <ScrollDown className="color-black" />}
                {/* {type && type == 'style1' && <ScrollDown className="color-black" />} */}
                {(sub_heading || description) && (
                  <Container>
                    <div className="about">
                      <CustomCard
                        className="px-0 pb-0"
                        title={(section_type == 'party' || section_type == 'masterbedroom') ? heading : sub_heading}
                        desc={description}
                        showAwards={showAwards}
                      />
                    </div>
                  </Container>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    );
  }
);

export default LottieAnimationSection;
