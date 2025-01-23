import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from '../../../config/config';

gsap.registerPlugin(ScrollTrigger);

const MicroHero = ({ data, onLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  const [totalFrames, setTotalFrames] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const canvasRef = useRef(null);
  const imageRefs = useRef([]);
  const isImagesLoaded = useRef(false);
  const scrollDownRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="section micro_hero_section p-0">
      <img src={CONFIG.IMAGE_URL + 'micro/hero/aeroone-gurgaon/desktop.webp'} alt="aeroone-gurgaon-hero-image" className="img-fluid d-none d-md-block" />
      <img src={CONFIG.IMAGE_URL + 'micro/hero/aeroone-gurgaon/mobile.webp'} alt="aeroone-gurgaon-hero-image" className="img-fluid d-md-none" />
      <div
        className="microsite-scrolldown microsite-scrolldown_1 micro_scroll"
        ref={scrollDownRef}
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
