import React, { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const PlaneIcon = `${API_URL}images/icons/plane.png`;

gsap.registerPlugin(ScrollTrigger);

const Typology = React.memo(({ onLoadComplete, data }) => {
  const containerRefTypo = useRef(null);
  const lottieRef = useRef(null);
  const animationRef = useRef(null);
  const contentRefs = useRef([]);
  const imageContentRefs = useRef([]);
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [totalFrames, setTotalFrames] = useState(0);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth <= 1400); // Dynamic resize handling

  const { data: typologyData, loading: typologyLoading } = useFetchData(
    `project/${data.project_id}/typologies`
  );

  const { heading, json } = data;

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => setIsLaptop(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load Lottie animation
  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "canvas", // Consider "svg" for better performance if needed
      loop: false,
      autoplay: false,
      path: BACKEND_IMAGE_URL + json,
    });

    animationRef.current.addEventListener("data_ready", () => {
      console.log("Lottie loaded, totalFrames:", animationRef.current.totalFrames); // Debug
      setTotalFrames(animationRef.current.totalFrames || 1);
      setLoading(false);
      setLoadingComplete(true);
      onLoadComplete();
    });

    animationRef.current.addEventListener("data_failed", () => {
      console.error("Failed to load Lottie animation");
      setLoading(false);
      onLoadComplete();
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [onLoadComplete, json]);

  // Calculate animation segments
  const segments = useMemo(() => {
    if (totalFrames === 0) return [];
    const third = Math.floor(totalFrames / 3);
    return [
      { contentIndex: 0, startFrame: 0, endFrame: third },
      { contentIndex: 1, startFrame: third + 1, endFrame: 2 * third },
      { contentIndex: 2, startFrame: 2 * third + 1, endFrame: totalFrames - 1 },
    ];
  }, [totalFrames]);

  // Refresh ScrollTrigger when section enters viewport
  useEffect(() => {
    if (loading || !loadingComplete || !typologyData) return;

    const refreshTrigger = ScrollTrigger.create({
      trigger: containerRefTypo.current,
      start: "top top", // Adjusted for earlier refresh
      once: true,
      // markers: true, // Uncomment for debugging
      onEnter: () => {
        console.log("Typology section reached, refreshing ScrollTrigger"); // Debug
        ScrollTrigger.refresh();
      },
    });

    return () => {
      refreshTrigger.kill();
    };
  }, [loading, loadingComplete, typologyData]);

  // Main ScrollTrigger for animation
  useEffect(() => {
    if (loading || !loadingComplete || totalFrames === 0 || !typologyData) return;

    // Initialize content visibility
    contentRefs.current.forEach((el, i) => {
      if (el) el.style.display = i === 0 ? "block" : "none";
    });

    imageContentRefs.current.forEach((el, i) => {
      if (el) el.style.display = i === 0 ? "block" : "none";
    });

    console.log(containerRefTypo.current.offsetHeight)
    const trigger = ScrollTrigger.create({
      trigger: containerRefTypo.current,
      start: "top top",
      end: () => `+=${containerRefTypo.current.offsetHeight * 2}`, // Dynamic end
      pin: true,
      scrub: 0.5, // Reduced for smoother response
      anticipatePin: 1, // Improves pinning smoothness
      onUpdate: (self) => {
        const segmentIndex = Math.min(
          Math.floor(self.progress * segments.length),
          segments.length - 1
        );
        const segment = segments[segmentIndex];
        const segmentProgress =
          (self.progress - segmentIndex / segments.length) * segments.length;
        const frameIndex = Math.min(
          segment.startFrame +
            Math.floor(segmentProgress * (segment.endFrame - segment.startFrame)),
          totalFrames - 1
        );

        if (animationRef.current) {
          animationRef.current.goToAndStop(frameIndex, true);
        }

        contentRefs.current.forEach((el, i) => {
          if (el) el.style.display = i === segment.contentIndex ? "block" : "none";
        });

        imageContentRefs.current.forEach((el, i) => {
          if (el) el.style.display = i === segment.contentIndex ? "block" : "none";
        });

        const typologyArrow = document.querySelector(".typology_arrow");
        if (typologyArrow) {
          const topValue = isLaptop
            ? segmentIndex === 0
              ? 65
              : segmentIndex === 1
              ? 215
              : 260
            : segmentIndex === 0
            ? 70
            : segmentIndex === 1
            ? 220
            : 265;
          typologyArrow.style.top = `${topValue}px`;
        }

        // Debug scroll progress
        // console.log(
        //   "Scroll progress:",
        //   self.progress,
        //   "segment:",
        //   segmentIndex,
        //   "frame:",
        //   frameIndex
        // );
      },
    });

    return () => {
      trigger.kill();
    };
  }, [loading, loadingComplete, totalFrames, segments, isLaptop, typologyData]);

  return (
    <section
      ref={containerRefTypo}
      className=" typology_section pb-0"
      aria-label="Typology Section"
    >
      <div className="heading_div mb_60 mb_sm_30">
        <h4 className="title title_style1 text-center">{data.heading}</h4>
      </div>

      <div className="images">
        <div
          ref={lottieRef}
          className="frame"
          style={{ height: "460px", maxHeight: "500px" }}
        />
        <div className="typology_arrow">
          <div className="line"></div>
        </div>
      </div>

      <div className="typology_content">
        <div className="typology-before-line">
          <div className="diamond_img_strip">
            <img
              src={PlaneIcon}
              className="img-fluid"
              alt="Plane image"
              loading="lazy"
            />
          </div>

          {typologyData?.map((item, index) => (
            <div
              key={item.id || index}
              ref={(el) => (contentRefs.current[index] = el)}
              className="content-box"
              style={{ display: index === 0 ? "block" : "none" }}
              aria-hidden={index !== 0} // Accessibility
            >
              <h3 className="content_title">{item.heading}</h3>
              <p>{item.short_description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="desktop-view-typo-images">
        {typologyData?.map((item, index) => (
          <div
            key={item.id || index}
            ref={(el) => (imageContentRefs.current[index] = el)}
            className="typologies-images"
            style={{ display: index === 0 ? "block" : "none" }}
            aria-hidden={index !== 0} // Accessibility
          >
            <picture>
              <source srcSet={BACKEND_IMAGE_URL + item.image} />
              <img
                className="img-fluid"
                src={BACKEND_IMAGE_URL + item.alternative_image}
                alt={item.alt}
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Typology;