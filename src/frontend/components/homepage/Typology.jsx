import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import Watermark from "../../../common/watermark/Index";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import { useMatches } from "../../../theme/theme";
import useFetchData from "../../utils/apiHelper";

const PlaneIcon = `${API_URL}images/icons/plane.png`;
const typo1 = `${API_URL}images/typologies/270/1.webp`;
const typo2 = `${API_URL}images/typologies/270/2.webp`;
const typo3 = `${API_URL}images/typologies/270/3.webp`;
const typo4 = `${API_URL}images/typologies/360/1.webp`;
const typo5 = `${API_URL}images/typologies/360/2.webp`;
const typo6 = `${API_URL}images/typologies/360/3.webp`;
const typo7 = `${API_URL}images/typologies/penthouse/1.webp`;
const typo8 = `${API_URL}images/typologies/penthouse/2.webp`;
const typo9 = `${API_URL}images/typologies/penthouse/3.webp`;

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
  const { isMobile } = useMatches();
  const isLaptop = window.innerWidth <= 1400;

  const { data: typologyData, loading: typologyLoading } = useFetchData(
    `project/${data.project_id}/typologies`
  );

  const { heading, json } = data;

  useEffect(() => {
    // Load Lottie animation
    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      path: `${json}`,
    });

    animationRef.current.addEventListener("data_ready", () => {
      // Dynamically set totalFrames from Lottie animation
      setTotalFrames(animationRef.current.totalFrames || 1); // Fallback to 1 to avoid division by zero
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

  // Define segments based on totalFrames
  const segments = React.useMemo(() => {
    if (totalFrames === 0) return [];
    const third = Math.floor(totalFrames / 3);
    return [
      { contentIndex: 0, startFrame: 0, endFrame: third },
      { contentIndex: 1, startFrame: third + 1, endFrame: 2 * third },
      { contentIndex: 2, startFrame: 2 * third + 1, endFrame: totalFrames - 1 },
    ];
  }, [totalFrames]);

  useEffect(() => {
    if (loading || !loadingComplete || totalFrames === 0) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${containerRef.current.offsetHeight * 2}`, // Extended scroll distance for slower animation
      pin: true,
      scrub: 1, // Smoother transitions
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
            Math.floor(
              segmentProgress * (segment.endFrame - segment.startFrame)
            ),
          totalFrames - 1
        );

        // Control Lottie animation frame
        if (animationRef.current) {
          animationRef.current.goToAndStop(frameIndex, true);
        }

        // Update content visibility
        contentRefs.current.forEach((el, i) => {
          if (el)
            el.style.display = i === segment.contentIndex ? "block" : "none";
        });

        imageContentRefs.current.forEach((el, i) => {
          if (el)
            el.style.display = i === segment.contentIndex ? "block" : "none";
        });

        // Update arrow position
        const typologyArrow = document.querySelector(".typology_arrow");
        if (typologyArrow) {
          let topValue;
          if (isLaptop) {
            topValue = segmentIndex === 0 ? 65 : segmentIndex === 1 ? 215 : 260;
          } else {
            topValue = segmentIndex === 0 ? 70 : segmentIndex === 1 ? 220 : 265;
          }
          typologyArrow.style.top = `${topValue}px`;
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading, loadingComplete, totalFrames, segments, isLaptop]);

  console.log("typologyData", typologyData);

  return (
    <>
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

            {typologyData &&
              typologyData?.map((item, index) => (
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="content-box"
                  style={{ display: "block" }}
                >
                  <h1>{item.heading}</h1>
                  <p>{item.short_description}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="desktop-view-typo-images">
          {typologyData &&
            typologyData?.map((item, index) => (
              <div
                ref={(el) => (imageContentRefs.current[index] = el)}
                className="typologies-images"
                style={{ display: "block" }}
              >
                <picture>
                  <source srcset={BACKEND_IMAGE_URL + item.image} />
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
    </>
  );
});

export default Typology;
