import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Watermark from '../../../common/watermark/Index';
import { API_URL } from "../../../config/config";
import { useMatches } from "../../../theme/theme";
import LottieAnimationSection from "../MicroPage/LottieAnimationSection";


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
  const lottieContainerRef=useRef(null);
  const frameRefs = useRef([]);
  const isImagesLoaded = useRef(false);
  const contentRefs = useRef([]);
  const imageContentRefs = useRef([]);
  const [animationData, setAnimationData] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { isMobile } = useMatches();
  const [data, setData] = useState([]);

  
  const isLaptop = window.innerWidth <= 1400;

  let totalFrames = isMobile ? 327 : 327;
  let segments = [
    { contentIndex: 0, startFrame: 0, endFrame: 125 },
    { contentIndex: 1, startFrame: 126, endFrame: 275 },
    { contentIndex: 2, startFrame: 276, endFrame: 327 },
  ];

  useEffect(() => {
    if (totalFrames === 0 || isImagesLoaded.current) return;

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = isMobile
        ? `${API_URL}assets/micro/aeroone-gurgaon/mobiles/${i}.webp`
        : `${API_URL}assets/micro/aeroone-gurgaon/mobiles/${i}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages); 
          setLoading(false);
          isImagesLoaded.current = true; 
          setLoadingComplete(true);
          onLoadComplete();
        }
      };

      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    fetch('/assets/data.json') // Path relative to the public folder
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);


  //  useEffect(() => {
  //       const loadAnimationData = async () => {
  //         try {
  //           const jsonPath =data;
  //           const response = await fetch(jsonPath);
  //           const data = await response.json();
  
  //           setAnimationData(data); 
  //         } catch (error) {
  //           console.error("Error loading animation data:", error);
  //           setLoading(false); 
  //         }
  //       };
  
  //       loadAnimationData();
  //     }, [isMobile, data]);

  //     useEffect(() => {
        
  //     if (
  //       !animationData ||
  //       !lottieContainerRef.current ||
  //       !containerRef.current
  //     )
  //       return;

  //     const lottieAnimation = lottie.loadAnimation({
  //       container: lottieContainerRef.current,
  //       animationData,
  //       renderer: "canvas",
  //       loop: false,
  //       autoplay: false,
  //       rendererSettings: {
  //         preserveAspectRatio: "xMidYMid slice",
  //         clearCanvas: true,
  //       },
  //     });

  //     const scrollAnimation = ScrollTrigger.create({
  //       trigger: containerRef.current,
  //       start: isBanner
  //         ? `top ${isMobile ? "top" : "top"}`
  //         : `top ${isMobile ? "65px" : "top"}`,
  //       end: `+=${window.innerHeight * 2}`,
  //       pin: true,
  //       scrub: 0.5,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //         const totalFrames = lottieAnimation.totalFrames;
  //         const frameIndex = Math.floor(progress * (totalFrames - 1));
  //         lottieAnimation.goToAndStop(frameIndex, true);
  //       },
  //       onLeave: () => {
  //         lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
  //       },
  //       onLeaveBack: () => {
  //         lottieAnimation.goToAndStop(0, true);
  //       },
  //     });
  //     if (isMainBanner) {
  //       ScrollTrigger.create({
  //         trigger: containerRef.current,
  //         start: "bottom top",
  //         toggleActions: "play none none reverse",
  //         onEnterBack: () => onBannerExit(false),
  //         onLeave: () => onBannerExit(true),
  //       });
  //     }

  //     lottieAnimation.addEventListener("DOMLoaded", () => {
  //       console.log("Lottie animation is fully loaded.");
  //       setLoading(false); 
  //       onLoadComplete && onLoadComplete(); 
  //     });

  //     return () => { 
  //       scrollAnimation.kill();
  //       lottieAnimation.destroy();
  //     };
  //   }, [animationData, onLoadComplete]);


  // useEffect(() => {
  //   if (loading || !loadingComplete || images.length !== totalFrames) return;

  //   ScrollTrigger.create({
  //     trigger: containerRef.current,
  //     start: "top top",
  //     end: `+=${window.innerHeight * 2}`,
  //     pin: true,
  //     scrub: 0.2,
  //     onUpdate: (self) => {
  //       const segmentIndex = Math.min(
  //         Math.floor(self.progress * segments.length),
  //         segments.length - 1
  //       );
      
  //       const segment = segments[segmentIndex];
  //       const segmentProgress =
  //         (self.progress - segmentIndex / segments.length) * segments.length;
  //       const frameIndex = Math.min(
  //         segment.startFrame +
  //           Math.floor(
  //             segmentProgress * (segment.endFrame - segment.startFrame)
  //           ),
  //         totalFrames - 1
  //       );
      
  //       frameRefs.current.forEach((img, index) => {
  //         if (img) img.style.display = index === frameIndex ? "block" : "none";
  //       });
      
  //       contentRefs.current.forEach((el, i) => {
  //         if (el) el.style.display = i === segment.contentIndex ? "block" : "none";
  //       });
      
  //       imageContentRefs.current.forEach((el, i) => {
  //         if (el) el.style.display = i === segment.contentIndex ? "block" : "none";
  //       });
      
  //       const typologyArrow = document.querySelector(".typology_arrow");
  //       if (typologyArrow) {
  //         let topValue;
  //         if (isLaptop) {
  //           topValue = segmentIndex === 0 ? 65 : segmentIndex === 1 ? 215 : 260;
  //         } else {
  //           topValue = segmentIndex === 0 ? 70 : segmentIndex === 1 ? 220 : 265;
  //         }
  //         typologyArrow.style.top = `${topValue}px`;
  //       }
  //     }
      
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [loading, images, totalFrames, loadingComplete]);


  // console.log(data,"data data data data")

  return (
    <>
      <section ref={containerRef} className="section typology_section pb-0" aria-label="Typology Section">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Typologies</h4>
        </div>
        <div className="images">
            <LottieAnimationSection     
            customClass="style2"
            data={data}
            position="0"
            logomark="sm style4"
            watermark="style4"/>
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

