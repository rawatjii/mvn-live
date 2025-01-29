import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Watermark from "../../../common/watermark/Index";
import { useMatches } from "../../../theme/theme";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";

gsap.registerPlugin(ScrollTrigger);

export default function Amenities({ section_data }) {
  const { isMobile } = useMatches();
  const sectionsRef = useRef([]);
  const triggers = useRef([]);
  const { title , data, second_title, desc } = section_data;

  const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

  // Set up GSAP ScrollTrigger for desktop view
  useEffect(() => {
    if (!isMobile) {
      triggers.current = [];
      sectionsRef.current.forEach((section, i) => {
        const bg = section.querySelector(".bg");

        if (bg) {
          const imageUrl = `url(${data[i].path.desktop})`; // Dynamically using the desktop path
          bg.style.backgroundImage = imageUrl;

          const defaultBgPos = i === 0 ? "50% 0" : `50% ${-window.innerHeight * getRatio(section)}px`;
          console.log(`Section ${i} Default Background Position:`, defaultBgPos);

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
                scrub: 0.5, // Smoothness of animation
                invalidateOnRefresh: true,
              },
            }
          );

          triggers.current.push(trigger.scrollTrigger);
        }
      });

      ScrollTrigger.refresh();
    }

    // Cleanup ScrollTriggers
    return () => {
      triggers.current.forEach((trigger) => trigger.kill());
    };
  }, [isMobile, data]);

  // Refresh ScrollTrigger after images are loaded
  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) {
            console.log("All images loaded. Refreshing ScrollTrigger...");
            ScrollTrigger.refresh();
          }
        });
      }
    });
  }, []);

  // Render Mobile View
  const renderMobileView = () => (
    <div className="section amenities_section main_am bottom_content pb-0">
      <div className="cards-container">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">{title}</h4>
        </div>
        {data.map((single, index) => (
          <div key={index} className="col-sm-12 col-md-4 col-lg-4">
            <div className="card center">
              <img
                src={single.path.mobile} // Use the mobile path directly
                alt={`mvn amenities ${index}`}
                className="img-fluid d-md-none"
                loading="lazy" // Lazy load images
              />
              <img
                src={single.path.desktop} // Use the desktop path directly
                alt={`mvn amenities ${index}`}
                className="img-fluid d-none d-md-block"
                loading="lazy" // Lazy load images
              />
              <Watermark />
            </div>
            <div className="content">
              <span className="am-name">{single.name}</span>
              {Array.isArray(single.desc) ? (
                single.desc.map((desc, idx) => (
                  <p key={idx} className="desc des_style1 text-center mt-3">{desc}</p>
                ))
              ) : (
                <p className="desc des_style1 text-center mt-3">{single.desc}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Desktop View
  const renderDesktopView = () => (
    <div className="section main_am pb-0">
      <div className="heading_div mb_60 mb_sm_30">
        <h4 className="title title_style1 text-center">{title}</h4>
      </div>
      {data.map((amenity, i) => (
        <section
          key={i}
          className="parallax"
          ref={(el) => (sectionsRef.current[i] = el)}
        >
          <div className="bg">
            <Watermark className="left" />
          </div>
          <div className="content">
            <span className="am-name">{amenity.name}</span>
            <p className="desc des_style1 text-center mt-2">{Array.isArray(amenity.desc) ? amenity.desc.join(' ') : amenity.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <>
      {isMobile ? renderMobileView() : renderDesktopView()}
      
      {/* Description */}
      {(second_title || desc) && (
        <Container>
          <div className="about">
            <CustomCard
              className="px-0 pb-0"
              title={second_title || ""}
              desc={desc || ""}
            />
          </div>
        </Container>
      )}
    </>
  );
}
