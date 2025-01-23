import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PlaneIcon from "../../../frontend/assets/images/icons/plane.png";
import typo1 from "../../assets/images/typologies/270/1.webp";
import typo2 from "../../assets/images/typologies/270/2.webp";
import typo3 from "../../assets/images/typologies/270/3.webp";

import typo4 from "../../assets/images/typologies/360/1.webp";
import typo5 from "../../assets/images/typologies/360/2.webp";
import typo6 from "../../assets/images/typologies/360/3.webp";

import typo7 from "../../assets/images/typologies/penthouse/1.webp";
import typo8 from "../../assets/images/typologies/penthouse/2.webp";
import typo9 from "../../assets/images/typologies/penthouse/3.webp";

gsap.registerPlugin(ScrollTrigger);

const Typology = ({onLoadComplete}) => {
  const containerRef = useRef(null);
  const frameRefs = useRef([]);
  const isImagesLoaded = useRef(false);
  const contentRefs = useRef([]);
  const imageContentRefs = useRef([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state
  const [loadingComplete, setLoadingComplete] = useState(false); // State to track when all images are loaded
  const isMobile = window.innerWidth <= 768;

  let totalFrames = isMobile ? 327 : 327;
  let segments = [
    { contentIndex: 0, startFrame: 0, endFrame: 125 },
    { contentIndex: 1, startFrame: 126, endFrame: 275 },
    { contentIndex: 2, startFrame: 276, endFrame: 327 },
  ];

  useEffect(() => {
    // Only preload images once totalFrames is set
    if (totalFrames === 0 || isImagesLoaded.current) return;

    // Preload images
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = isMobile
        ? `assets/images/micro/aeroone-gurgaon/mobiles/${i}.webp`
        : `assets/images/micro/aeroone-gurgaon/mobiles/${i}.webp`;

      // Track when each image loads
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages); // Set images after all are loaded
          setLoading(false); // Hide loader
          isImagesLoaded.current = true; // Mark as loaded
          setLoadingComplete(true); // Mark loading as complete
          onLoadComplete();
        }
      };

      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (loading || !loadingComplete ||images.length !== totalFrames) return;
  
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 0.2,
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
  
        // Debugging output (optional)
        console.log("Frame Index:", frameIndex, "Progress:", self.progress);
  
        // Show the current frame and hide others
        frameRefs.current.forEach((img, index) => {
          img.style.display = index === frameIndex ? "block" : "none";
        });
  
        // Toggle content-box visibility
        contentRefs.current.forEach((el, i) => {
          el.style.display = i === segment.contentIndex ? "block" : "none";
        });
  
        // Toggle typologies-images visibility
        imageContentRefs.current.forEach((el, i) => {
          el.style.display = i === segment.contentIndex ? "block" : "none";
        });
      },
    });
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading, images, totalFrames, loadingComplete]);

  return (
    <>
      <section ref={containerRef} className="section typology_section">
        <div className="sec_title text-center color style1">
          <h4 className="title">Typologies</h4>
        </div>

        {/* Images section */}
        <div className="images">
          {images.map((img, index) => (
            <img
              key={index}
              ref={(el) => (frameRefs.current[index] = el)}
              src={img.src}
              alt={`Frame ${index}`}
              className="frame"
              style={{ display: index === 0 ? "block" : "none",}}
            />
          ))}
        </div>

        {/* Content boxes */}
        <div className="typology_content">
          <div className="typology-before-line">

          <div class="diamond_img_strip">
            <img src={PlaneIcon} class="img-fluid" alt="image" />
            </div>

            {/* <div className="typology_diamond_btn">
              <img src={PlaneIcon} alt="mvn plane icon" />
              <img src={PlaneIcon} alt="mvn plane icon" />
              <img src={PlaneIcon} alt="mvn plane icon" />
            </div> */}

            <div
              ref={(el) => (contentRefs.current[0] = el)}
              className="content-box"
              style={{ display: "block" }}
            >
              <h1>Penthouse</h1>
              <p>
                Elevate your lifestyle to new heights with these extraordinary
                duplex residences, where two levels of unmatched luxury unfold before
                you. With impeccable attention to detail and a focus on privacy
                and exclusivity, these residences embody the pinnacle of
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
                At an impressive 11700 sq.ft., the simplex flats offer a
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
                Spanning an expansive 5850 sq.ft., these exquisite residences
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
              <img className="image-1" src={typo1} alt="mvn typlogy 1" />
              <img className="image-2" src={typo2} alt="mvn typlogy 1" />
              <img className="image-3" src={typo3} alt="mvn typlogy 1" />
          </div>

          <div
            ref={(el) => (imageContentRefs.current[1] = el)}
            className="typologies-images"
            style={{ display: "none" }}
          >
            <img className="image-1" src={typo4} alt="mvn typlogy 2" />
            <img className="image-2" src={typo5} alt="mvn typlogy 2" />
            <img className="image-3" src={typo6} alt="mvn typlogy 2" />
          </div>

          <div
            ref={(el) => (imageContentRefs.current[2] = el)}
            className="typologies-images"
            style={{ display: "none" }}
          >
            <img className="image-1" src={typo7} alt="mvn typlogy 3" />
            <img className="image-2" src={typo8} alt="mvn typlogy 3" />
            <img className="image-3" src={typo9} alt="mvn typlogy 3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Typology;
