import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";

import Watermark from "../../../common/watermark/Index";
import { useMatches } from "../../../theme/theme";

gsap.registerPlugin(ScrollTrigger);

export default function NoPollutionZone({ data }) {
  const sectionsRef = useRef([]);
  const { isMobile } = useMatches();

  useEffect(() => {
    if (!isMobile) {
      const triggers = [];
      const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

      sectionsRef.current.forEach((section, i) => {
        const bg = section.querySelector(".bg");
        if (bg) {
          const image_url = `url(${CONFIG.IMAGE_URL}/no-pollution/${data[i].imgSrc})`;
          bg.style.backgroundImage = image_url;

          const defaultBgPos = i === 0 ? "50% 0" : `50% ${-window.innerHeight * getRatio(section)}px`;

          const trigger = gsap.fromTo(
            bg,
            { backgroundPosition: defaultBgPos },
            {
              backgroundPosition: `50% ${window.innerHeight * (1 - getRatio(section))}px`,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: i === 0 ? "top top" : "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );
          triggers.push(trigger.scrollTrigger);
        }
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }
  }, [isMobile, data]);

  const renderMobileView = () => (
    <>
      {data.map((single, index) => (
        <div key={index} className="col-sm-12 col-md-4 col-lg-4">
          <div className="card center">
            <img
              src={`${CONFIG.IMAGE_URL}no-pollution/${single.imgSrc}`}
              alt={`mvn connection ${index}`}
              className="img-fluid d-md-none"
              loading="lazy"
            />
            <img
              src={`${CONFIG.IMAGE_URL}no-pollution/${single.imgSrc}`}
              alt={`mvn connection ${index}`}
              className="img-fluid d-none d-md-block"
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
        <section key={i} className="parallax" ref={(el) => (sectionsRef.current[i] = el)}>
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
}
