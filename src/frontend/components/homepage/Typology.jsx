import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const PlaneIcon = `${API_URL}images/icons/plane.png`;

gsap.registerPlugin(ScrollTrigger);

const Typology = React.memo(({ onLoadComplete, data }) => {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);
  const animationRef = useRef(null);
  const contentRefs = useRef([]);
  const imageContentRefs = useRef([]);
  const [loading, setLoading] = React.useState(true);
  const [loadingComplete, setLoadingComplete] = React.useState(false);
  const [totalFrames, setTotalFrames] = React.useState(0);
  const isLaptop = window.innerWidth <= 1400;

  const { data: typologyData, loading: typologyLoading } = useFetchData(
    `project/${data.project_id}/typologies`
  );

  const { heading, json } = data;

  // Load Lottie animation
  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      path: json,
    });

    animationRef.current.addEventListener("data_ready", () => {
      setTotalFrames(animationRef.current.totalFrames || 1);
      setLoading(false);
      setLoadingComplete(true);
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

  useEffect(() => {
    if (loading || !loadingComplete || !typologyData) return;

    const refreshTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center", 
      once: true,
      onEnter: () => {
        ScrollTrigger.refresh(); 
      },
    });

    return () => {
      refreshTrigger.kill();
    };
  }, [loading, loadingComplete, typologyData]);

  useEffect(() => {
    if (loading || !loadingComplete || totalFrames === 0 || !typologyData) return;

    // Initialize content visibility
    contentRefs.current.forEach((el, i) => {
      if (el) el.style.display = i === 0 ? "block" : "none";
    });

    imageContentRefs.current.forEach((el, i) => {
      if (el) el.style.display = i === 0 ? "block" : "none";
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${containerRef.current.offsetHeight * 2}`,
      pin: true,
      scrub: 1,
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
      },
    });

    return () => {
      trigger.kill();
    };
  }, [loading, loadingComplete, totalFrames, segments, isLaptop, typologyData]);

  return (
    <section
      ref={containerRef}
      className="section typology_section pb-0"
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