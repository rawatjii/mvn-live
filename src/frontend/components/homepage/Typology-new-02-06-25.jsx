import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import Watermark from '../../../common/watermark/Index';
import { API_URL } from "../../../config/config";
import { useMatches } from "../../../theme/theme";

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

const Typology = React.memo(({ onLoadComplete }) => {
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

  useEffect(() => {
    // Load Lottie animation
    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      path: `${API_URL}assets/micro/aeroone-gurgaon/data.json`,
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
  }, [onLoadComplete]);

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
      end: `+=${window.innerHeight * 2}`, // Extended scroll distance for slower animation
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
          if (el) el.style.display = i === segment.contentIndex ? "block" : "none";
        });

        imageContentRefs.current.forEach((el, i) => {
          if (el) el.style.display = i === segment.contentIndex ? "block" : "none";
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

  return (
    <>
      <section ref={containerRef} className="section typology_section pb-0" aria-label="Typology Section">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Typologies</h4>
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

            <div
              ref={(el) => (contentRefs.current[0] = el)}
              className="content-box"
              style={{ display: "block" }}
            >
              <h1>Penthouse</h1>
              <p>
                Elevate your lifestyle to new heights with these extraordinary
                duplex residences, where two levels of unmatched luxury unfold
                before you. With impeccable attention to detail and a focus on
                privacy and exclusivity, these residences embody the pinnacle of
                sophisticated living, where only the most discerning will
                reside.
              </p>
            </div>

            <div
              ref={(el) => (contentRefs.current[1] = el)}
              className="content-box"
              style={{ display: "none" }}
            >
              <h1>360 degree Panoramic Apartment</h1>
              <p>
                At an impressive 12600 sq.ft., the simplex flats offer a
                commanding 360-degree panoramic vista, presenting a boundless
                world of elegance. This is where space, design, and nature
                converge in perfect harmony.
              </p>
            </div>

            <div
              ref={(el) => (contentRefs.current[2] = el)}
              className="content-box"
              style={{ display: "none" }}
            >
              <h1>270 degree Panoramic Apartment</h1>
              <p>
                Spanning an expansive 6300 sq.ft., these exquisite residences
                offer a captivating 270-degree panoramic view, seamlessly
                blending breathtaking vistas with unmatched sophistication.
              </p>
            </div>
          </div>
        </div>

        <div className="desktop-view-typo-images">
          <div
            ref={(el) => (imageContentRefs.current[0] = el)}
            className="typologies-images"
            style={{ display: "block" }}
          >
            <span className="image-1">
              <img
                className="img-fluid"
                src={typo1}
                alt="mvn typology 1"
                loading="lazy"
              />
              <Watermark />
            </span>
            <img
              className="image-2"
              src={typo2}
              alt="mvn typology 2"
              loading="lazy"
            />
            <img
              className="image-3"
              src={typo3}
              alt="mvn typology 3"
              loading="lazy"
            />
          </div>

          <div
            ref={(el) => (imageContentRefs.current[1] = el)}
            className="typologies-images"
            style={{ display: "none" }}
          >
            <img
              className="image-1"
              src={typo4}
              alt="mvn typology 1"
              loading="lazy"
            />
            <img
              className="image-2"
              src={typo5}
              alt="mvn typology 2"
              loading="lazy"
            />
            <img
              className="image-3"
              src={typo6}
              alt="mvn typology 3"
              loading="lazy"
            />
          </div>

          <div
            ref={(el) => (imageContentRefs.current[2] = el)}
            className="typologies-images"
            style={{ display: "none" }}
          >
            <img
              className="image-1 img-fluid"
              src={typo7}
              alt="mvn typology 1"
              loading="lazy"
            />
            <span className="image-2">
              <img
                className="img-fluid"
                src={typo8}
                alt="mvn typology 2"
                loading="lazy"
              />
              <Watermark className="left" />
            </span>
            <img
              className="image-3"
              src={typo9}
              alt="mvn typology 3"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
});

export default Typology;