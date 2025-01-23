import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const totalFrames = 70;
  const frameRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    for (let i = 2000; i <= 2069; i++) {
      const img = new Image();
      img.src = `assets/videos/video_img/building_view${i}.jpg`; // Update with the correct path for your frames
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length !== totalFrames) return; // Wait until all images are loaded

    // Image sequence animation
    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${window.innerHeight * 2}`, // Extend scroll distance to fit more frames
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        
        // Only start changing frames after a scroll progress threshold
        // First condition: Only start changing frames after a scroll progress threshold
        if (self.progress > 0.1) {
          frameRefs.current.forEach((img, index) => {
            if (img) img.style.display = index === frameIndex ? "block" : "none";
          });
        }

        // Second condition: Handle contentRef visibility independently
        if(self.progress > 0.3 && self.progress < 0.9){
          contentRef.current.classList.add('active');
        }else{
          contentRef.current.classList.remove('active');
        }
      },
      onLeaveBack: () => {
        // Reset to first frame when scrolling back to the start smoothly
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === 0 ? "block" : "none";
        });
      },
      onLeave: () => {
        // Reset to last frame when scrolling to the end smoothly
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === totalFrames - 1 ? "block" : "none";
        });
      }
    });

    return () => {
      scrollAnimation.kill();
    };

  }, [images, totalFrames]);

  return (
    <div ref={containerRef} className="frame-container">
      {images.map((img, index) => (
        <img
          key={index}
          ref={(el) => (frameRefs.current[index] = el)}
          src={img.src}
          alt={`Frame ${index}`}
          className="frame"
          style={{ display: index === 0 ? "block" : "none" }}
        />
      ))}

      <div className="content" ref={contentRef}>
        <h4 className="title">JUMEIRA BAY ISLAND</h4>
        <p>
          An exclusive sanctuary of peace and tranquillity, Jumeira Bay Island
          is a vibrant tapestry of gardens, pools, and quiet boulevards, bathed
          in the unique natural light found on this coastline. In classic
          Bulgari style, the intricate patterns of the architectural coral
          project soft shadows onto the black and gold Paonazzo marble. Opulent
          Bulgari chandeliers positioned along the bay create the impression of
          jewel-lined waters. The perfect backdrop to luxury living.
        </p>
      </div>
    </div>
  );
};

export default ScrollVideo;
