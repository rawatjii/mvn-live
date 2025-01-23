import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomepageVideo = ({ data }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const [totalFrames, seTotalFrames] = useState(292);



  const [images, setImages] = useState([]);
  const [imagePath, setImagePath] = useState("assets/images/micro/hero/mobile");
  const frameRefs = useRef([]);

  // Handle screen size and update image path
  useEffect(() => {
    const updateImagePath = () => {
      if (window.innerWidth <= 768) {
        seTotalFrames(275)

        setImagePath("assets/images/micro/hero/mobile");
      } else {
        setImagePath("assets/videos/cloud-elevation/video-desktop");
      }
    };

    // Set initial path and add resize listener
    updateImagePath();
    window.addEventListener("resize", updateImagePath);

    return () => window.removeEventListener("resize", updateImagePath);
  }, []);

  // Animation for the title
  useEffect(() => {
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

  // Preload images
  useEffect(() => {
    const loadedImages = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${imagePath}/${i}.webp`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [imagePath]);

  // Image sequence animation
  useEffect(() => {
    if (images.length !== totalFrames) return;

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 3}`,
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));

        if (self.progress > 0.1) {
          frameRefs.current.forEach((img, index) => {
            if (img)
              img.style.display = index === frameIndex ? "block" : "none";
          });
        }
      },
      onLeaveBack: () => {
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === 0 ? "block" : "none";
        });
      },
      onLeave: () => {
        frameRefs.current.forEach((img, index) => {
          if (img)
            img.style.display = index === totalFrames - 1 ? "block" : "none";
        });
      },
    });

    return () => {
      scrollAnimation.kill();
    };
  }, [images, totalFrames]);

  const { title, desc } = data;

  return (
    <div className="section peacock_section pb-0 homeScroll-video">
      <div ref={containerRef} className="frames_content">
        {images.map((img, index) => (
          <img
            key={index}
            ref={(el) => (frameRefs.current[index] = el)}
            src={img.src}
            alt={`Frame ${index}`}
            className="frame"
            style={{ display: index === 0 ? "block" : "none" }}
            id={index === totalFrames - 1 ? "demo" : undefined} // Add demo ID to last frame
          />
        ))}
      </div>
      {/* 
      <div className="content">
        <Container>
          <SecTitle className="text-center color style1">
            <h4 ref={titleRef} className="title">{title}</h4>
          </SecTitle>

          {desc && <p className="desc">{desc}</p>}
        </Container>
      </div>
      */}
    </div>
  );
};

export default HomepageVideo;
