import React, { useEffect, useRef } from 'react';
import desktopBanner from '../../assets/images/aero-gurgaon/hero/desktop.webp';
import mobileBanner from '../../assets/images/aero-gurgaon/hero/mobile.webp';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const MicroHero = ({onBannerExit, isMainBanner}) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (isMainBanner && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse",
        onEnterBack: () => onBannerExit(false),
        onLeave: () => onBannerExit(true),
      });
    }
  }, [isMainBanner, onBannerExit]);

  return (
    <section className="section micro_hero_section p-0" ref={sectionRef}>
      <img src={desktopBanner} alt="aeroone-gurgaon-hero-image" className="img-fluid d-none d-md-block" />
      <img src={mobileBanner} alt="aeroone-gurgaon-hero-image" className="img-fluid d-md-none" />
      <div
        className="microsite-scrolldown microsite-scrolldown_1 micro_scroll"
      >
        <div id="scroll-wrapper-inner">
          <div id="scroll-title">Scroll Down</div>
          <div className="scroll-down-dude"></div>
        </div>
      </div>
    </section>
  );
};

export default MicroHero;
