import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";



import Watermark from "../../../common/watermark/Index";

gsap.registerPlugin(ScrollTrigger);



export default function AmenitiesDesktop({ data }) {

  const amenities = data;
  const sectionsRef = useRef([]);
  const isMobile = window.innerWidth <= 768;

  const imgICON = CONFIG.IMAGE_URL

  useEffect(() => {
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);
    const triggers = [];

    sectionsRef.current.forEach((section, i) => {

      const bg = section.querySelector(".bg");
      if (bg) {
        // Set background image dynamically
        

        var image_url=`url(${CONFIG.IMAGE_URL}amenities/${amenities[i].imgSrc.desktop})`;
     

        bg.style.backgroundImage =image_url;

        const defaultBgPos =
          i === 0
            ? "50% 0"
            : `50% ${-window.innerHeight * getRatio(section)}px`;

        const trigger = gsap.fromTo(
          bg,
          { backgroundPosition: defaultBgPos },
          {
            backgroundPosition: `50% ${
              window.innerHeight * (1 - getRatio(section))
            }px`,
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

    // Refresh ScrollTrigger to recalculate after animations are set up
    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [amenities]);

  return (
    <>
      <div className="main_am">
        <div className="sec_title text-center color style1">
          <h4 className="title">Amenities</h4>
        </div>
        {amenities.map((amenity, i) => (
          <section
            key={i}
            className="parallax"
            ref={(el) => (sectionsRef.current[i] = el)}
          >
            <div className="bg">
            <Watermark />
            </div>
            <div className="content">
              <span className="am-name">{amenity.name}</span>
              <p className="desc">{amenity.desc}</p>
            </div>
          </section>
        ))}
      </div>
 
    </>
  );
}