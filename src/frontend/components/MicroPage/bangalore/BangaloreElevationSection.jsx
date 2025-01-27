import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import frontDesktopImg from "/public/assets/bangalore/fr-front1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from "../../Card";
import "./bangalore_elevation_section.css";
import Watermark from "../../../../common/watermark/Index";

gsap.registerPlugin(ScrollTrigger);

export default function BangaloreElevationSection() {
  const elevationRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Ensure refs are defined
    if (!elevationRef.current || !imgRef.current) {
      console.error("Required elements not found in the DOM.");
      return;
    }

    // Animation logic
    const animation = gsap.from(imgRef.current, {
      y: window.innerWidth <= 768 ? -80 : -200,
      scrollTrigger: {
        trigger: elevationRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 0.2,
        invalidateOnRefresh: true,
      },
    });

    // Refresh ScrollTrigger after a short delay
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      animation.kill(); // Kill the GSAP animation
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up ScrollTrigger instances
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      <Container>
        <div className="about">
          <CustomCard className="px-0" />
        </div>
      </Container>

      <section className="BangaloreElevation " ref={elevationRef}>
        <div className="BangaloreImgs">
          <img
            src={frontDesktopImg}
            alt="Large elevation Img"
            className="BangaloreFrontImg"
            ref={imgRef}
          />
          <Watermark/>
        </div>
        <Container>
          <div className="about">
            <CustomCard
              className="px-0"
              title="Timeless Fusion of Elegance"
              desc="Designed to inspire awe at first glance, the static elevation of MVN Aero One showcases
              a perfect fusion of form and function. Each detail is meticulously crafted to embody a harmonious balance
              of contemporary aesthetics and architectural innovation."
            />
          </div>
        </Container>
      </section>
    </>
  );
}

