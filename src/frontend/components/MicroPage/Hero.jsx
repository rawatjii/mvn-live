import React from "react";
import desktopBanner from '../../assets/images/aero-gurgaon/hero/desktop.webp';
import mobileBanner from '../../assets/images/aero-gurgaon/hero/mobile.webp';

const MicroHero = () => {

  return (
    <section className="section micro_hero_section p-0" >
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
