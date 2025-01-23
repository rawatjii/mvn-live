import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";



import Watermark from "../../../common/watermark/Index";

gsap.registerPlugin(ScrollTrigger);



export default function NoPolutionZone({ data }) {

  const noPollutionZone = data;
  const sectionsRef = useRef([]);
  const isMobile = window.innerWidth <= 768;

  const imgICON = CONFIG.IMAGE_URL

  useEffect(() => {
    if(!isMobile){
      const getRatio = (el) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);
        const triggers = [];
  
        sectionsRef.current.forEach((section, i) => {
  
          const bg = section.querySelector(".bg");
          if (bg) {
            // Set background image dynamically
            
  
            var image_url=`url(${CONFIG.IMAGE_URL}/no-pollution/${noPollutionZone[i].imgSrc})`;
        
  
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
    }
    
  }, [isMobile, noPollutionZone]);

  return (
    <>
      <div className={!isMobile ? 'section main_am pb-0' : 'section amenities_section main_am pb-0'}>
        <div className="cards-container">
          {/* <div className="sec_title text-center color style1">
            <h4 className="title">Connections with MVN Mall</h4>
          </div> */}

          <div className="heading_div mb_60 mb_sm_30" >
            <h4 className="title title_style1 text-center">Connections with MVN Mall</h4>
          </div>

          {!isMobile ? (
            noPollutionZone.map((amenity, i) => (
              <section
                key={i}
                className="parallax"
                ref={(el) => (sectionsRef.current[i] = el)}
              >
                <div className="bg">
                <Watermark className="left" />
                </div>
                <div className="content">
                  <span className="am-name">{amenity.title}</span>
                  <p className="desc des_style1 text-center mt-2">{amenity.desc}</p>
                </div>
              </section>
            ))
          ) : (
            noPollutionZone.map((single, index)=>(
              <div key={index} className='col-sm-12 col-md-4 col-lg-4'>
                <div className="card center" onClick={() => setIndex(index)}>
                  <img src={CONFIG.IMAGE_URL + 'no-pollution/'+single.imgSrc} alt={`mvn connection ${index}`} className="img-fluid d-md-none" loading="lazy"  />
                  <img src={CONFIG.IMAGE_URL + 'no-pollution/'+single.imgSrc} alt={`mvn connection ${index}`} className="img-fluid d-none d-md-block"  loading="lazy" />
                  <Watermark  />
                </div>
                <div className="content">
                  <span className="am-name">{single.title}</span>
                  <p className="desc">
                    {Array.isArray(single.desc) ? (
                      single.desc.map((desc, index) => (
                        <p key={index} className="desc">
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className="desc des_style1 text-center mt-2">{single.desc}</p>
                    )}
                  </p>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
 
    </>
  );
}