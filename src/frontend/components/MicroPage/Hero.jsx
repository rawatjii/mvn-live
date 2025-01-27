import React, { useRef } from "react";
import * as CONFIG from '../../../config/config';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MicroHero = () => {
  const scrollDownRef = useRef(null);

  return (
    <section className="section micro_hero_section p-0">
      <img src={CONFIG.IMAGE_URL + 'micro/hero/aeroone-gurgaon/desktop.webp'} alt="aeroone-gurgaon-hero-image" className="img-fluid d-none d-md-block" />
      <img src={CONFIG.IMAGE_URL + 'micro/hero/aeroone-gurgaon/mobile.webp'} alt="aeroone-gurgaon-hero-image" className="img-fluid d-md-none" />
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
