import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

export default function SecSliding({ data }) {
  const sectionsRef = useRef([]);
  console.log('page data',data);

  useEffect(() => {
    const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
    const triggers = [];

    sectionsRef.current.forEach((section, i) => {
      const bg = section.querySelector('.bg');
      if (bg) {
        // Set background image dynamically
        bg.style.backgroundImage = `url(${data.data[i].lg})`;

        const defaultBgPos = i === 0 ? '50% 0' : `50% ${-window.innerHeight * getRatio(section)}px`;

        const trigger = gsap.fromTo(
          bg,
          { backgroundPosition: defaultBgPos },
          {
            backgroundPosition: `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: i === 0 ? 'top top' : 'top bottom',
              end: 'bottom top',
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
  }, [data]);

  return (
    <div className="main_am">
      <div className="sec_title text-center color style1">
        <h4 className="title">{data.title}</h4>
      </div>
      {data.data.map((amenity, i) => {
        console.log('amenity data', amenity);
        return (
          <section
            key={i}
            className="parallax"
            ref={(el) => (sectionsRef.current[i] = el)}
            aria-label="Sliding Section"
          >
          <div className="bg"></div>
          {Object.keys(amenity.content).length !== 0 && (
            <div className="content">
              <span className="am-name">{amenity.name}</span>
              <p className='desc'>{amenity.desc}</p>
            </div>
          )}
          
        </section>
        )
      })}
    </div>
  );
}
