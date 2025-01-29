import React, { useEffect, useRef } from 'react'
import * as CONFIG from '../../../../config/config';
import './banner.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AthensBanner = ({data ,onBannerExit ,isMainBanner}) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (isMainBanner && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse",
        onEnterBack: () => onBannerExit(false), // Remove fixed class
        onLeave: () => onBannerExit(true), // Add fixed class
      });
    }
  }, [isMainBanner, onBannerExit]);
  return (
    <div className="AthensBanner" ref={sectionRef}>
    <img src={data.desktop} alt="Desktop Banner" className="d-none d-md-block"/>
    <img src={data.mobile} alt="Mobile  Banner" className="d-md-none"/>
  </div>
  )
}

export default AthensBanner