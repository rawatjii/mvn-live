import React, { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Watermark from "../../../common/watermark/Index";
import * as CONFIG from "../../../config/config";
import { useMatches } from "../../../theme/theme";

gsap.registerPlugin(ScrollTrigger);

 function NoPollutionZone({ section_data }) {
  const sectionsRef = useRef([]);
  const triggersRef = useRef([]);
  const { isMobile } = useMatches();
  const {data}= section_data || {};

  // Memoized function to calculate ratio
  const getRatio = useCallback((el)=>{
    return window.innerHeight / (window.innerHeight + el.offsetHeight);
  }, [])

  // Animation setup function
  const setupAnimations = useCallback(() => {
    if (!data || !sectionsRef.current.length || isMobile) return;

    triggersRef.current = sectionsRef.current.map((section, i) => {
      const bg = section?.querySelector(".bg");
      if (!bg || !data[i]) return null;

      // Set background image based on screen size
      const imageUrl = window.innerWidth < 768
        ? `url(${data[i].path.mobile})`
        : `url(${data[i].path.desktop})`;
      bg.style.backgroundImage = imageUrl;

      const defaultBgPos = i === 0 
        ? "50% 0" 
        : `50% ${-window.innerHeight * getRatio(section)}px`;

      return ScrollTrigger.create({
        trigger: section,
        start: i === 0 ? "top top" : "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
        animation: gsap.fromTo(
          bg,
          { backgroundPosition: defaultBgPos },
          {
            backgroundPosition: `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
          }
        ),
      });
    }).filter(Boolean);

    ScrollTrigger.refresh();
  }, [data, isMobile, getRatio]);

  // Effect to handle animation setup and cleanup
  useEffect(() => {
    if (!isMobile && data) {
      setupAnimations();
    }

    return () => {
      triggersRef.current.forEach((trigger) => trigger?.kill());
      triggersRef.current = [];
    };
  }, [isMobile, data, setupAnimations]);
  

  const renderMobileView = () => (
    <>
      {data.map((single, index) => (
        <div key={index} className="col-sm-12 col-md-4 col-lg-4">
          <div className="card center">
            <img
              src={`${single.path.mobile}`}
              alt={`mvn connection ${index}`}
              className="img-fluid"
              loading="lazy"
            />
            <Watermark />
          </div>
          <div className="content">
            <span className="am-name">{single.title}</span>
            <p className="desc">
              {Array.isArray(single.desc)
                ? single.desc.map((desc, idx) => <p key={idx}>{desc}</p>)
                : single.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );

  const renderDesktopView = () => (
    <>
      {data.map((amenity, i) => (
        <section key={i} className="parallax" ref={(el) => (sectionsRef.current[i] = el)} aria-label="NoPolutionZone Section">
          <div className="bg">
            <Watermark className="left" />
          </div>
          <div className="content">
            <span className="am-name">{amenity.title}</span>
            <p className="desc des_style1 text-center mt-2">{amenity.desc}</p>
          </div>
        </section>
      ))}
    </>
  );

  return (
    <div className={isMobile ? 'section amenities_section main_am pb-0' : 'section main_am pb-0'}>
      <div className="cards-container">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Connections with MVN Mall</h4>
        </div>
        {!isMobile ? renderDesktopView() : renderMobileView()}
      </div>
    </div>
  );
};

export default React.memo(NoPollutionZone)
