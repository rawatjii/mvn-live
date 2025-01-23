import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import * as CONFIG from '../../config/config';

import './scrollToTop.css';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTopRef = useRef(null);

  const scrollToTop = () => {
    // Use ScrollSmoother to scroll to the top
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, true); // true for smooth scrolling
    }
  };

  useEffect(() => {
    // Listen to scroll events
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".fix_scrolltop_section",
      start: "top center",
      onEnter: () => setIsVisible(true), // Show button when Overview is in view
      onLeaveBack: () => setIsVisible(false),
    });

    return () => scrollTrigger.kill();
  }, []);

  return(
    <div
      className={`scrollToTop ${isVisible ? "visible" : ""}`}
      ref={scrollToTopRef}
      onClick={scrollToTop}
      
    >
      <img src={CONFIG.IMAGE_URL + 'icons/arrow_up.png'} alt="arrow up img" className="arrow_up_icon" />
     Top
    </div>
  )  
}

export default ScrollTop