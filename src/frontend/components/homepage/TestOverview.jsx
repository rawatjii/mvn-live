import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as CONFIG from '../../../config/config';

gsap.registerPlugin(ScrollTrigger);

const TestOverview = () => {
  const sectionRef = useRef(); // Reference for the section
  const animationRef = useRef(); // Reference for the images

  useEffect(() => {
    const images = animationRef.current.querySelectorAll(".overviewAnImg"); // Select all images
    const totalImages = images.length;

    // Hide all images initially except the first one
    gsap.set(images, { autoAlpha: 0 });
    gsap.set(images[0], { autoAlpha: 1 });

    // Create a timeline for frame blending
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Start animation when section reaches the top
        end: "bottom bottom", // End animation when section leaves the bottom
        scrub: true, // Smooth animation tied to scroll
        pin: true, // Pin the section during animation
        anticipatePin: 1, // Avoid flickering on pinning
      },
    });

    // Add frame transitions to the timeline
    images.forEach((img, index) => {
      const nextImg = images[index + 1];

      if (nextImg) {
        tl.to(img, {
          autoAlpha: 0, // Fade out the current image
          duration: 1, // Smooth fade duration
        }, index) // Start at this frame's position in the timeline
        .to(nextImg, {
          autoAlpha: 1, // Fade in the next image
          duration: 1, // Smooth fade duration
        }, index); // Start at the same position as the fade-out
      }
    });

    // Ensure the last frame stays visible
    tl.to(images[images.length - 1], {
      autoAlpha: 1, // Keep the last frame visible
      duration: 0,
    });

  }, []);

  return (
    <>
      <section ref={sectionRef} className="testOverviewSection" aria-label="Overview Section">
      <img
          src={CONFIG.IMAGE_URL + `test/frame1.jpg`}
          alt="mvn overview image"
          className="overviewAnImg main_img"
        />
        <div ref={animationRef} className="overviewAnimation">
          <img src={CONFIG.IMAGE_URL + `test/frame10.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame9.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame8.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame7.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame6.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame5.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame4.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame3.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame2.jpg`} alt="mvn overview image" className="overviewAnImg" />
          <img src={CONFIG.IMAGE_URL + `test/frame1.jpg`} alt="mvn overview image" className="overviewAnImg" />
        </div>
      </section>
    </>
  );
};

export default TestOverview;
