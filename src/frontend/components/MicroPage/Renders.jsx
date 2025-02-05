import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";
gsap.registerPlugin(ScrollTrigger);

const Renders = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Apartment",
      content: "This is the first slide.",
      images: [
        {
          lg: `${CONFIG.IMAGE_URL}renders/apartment/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/1.jpg`,
        },
        {
          lg: `${CONFIG.IMAGE_URL}renders/apartment/2Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/2.jpg`,
        },
        {
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/3.jpg`,
        },
      ],
      thumbnail: `${CONFIG.IMAGE_URL}/renders/apartment/2Lg.jpg`,
    },
    {
      title: "Elevation",
      content: "This is the first slide.",
      images: [
        {
          lg: `${CONFIG.IMAGE_URL}renders/elevation/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/1.jpg`,
        },
        {
          lg: `${CONFIG.IMAGE_URL}renders/elevation/2Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/2.jpg`,
        },
        {
          lg: `${CONFIG.IMAGE_URL}renders/elevation/3Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/3.jpg`,
        },
      ],
      thumbnail: `${CONFIG.IMAGE_URL}/renders/elevation/2Lg.jpg`,
    },
    {
      title: "Landscape",
      content: "This is the first slide.",
      images: [
        {
          lg: `${CONFIG.IMAGE_URL}renders/landscape/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/landscape/1.jpg`,
        }
      ],
      thumbnail: `${CONFIG.IMAGE_URL}/renders/landscape/1.jpg`,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const totalSlides = slides.length;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${section.offsetHeight * totalSlides}`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const index = Math.floor(self.progress * totalSlides);
        setActiveIndex(index);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [slides.length]);

  return (
    <section className="render_section" ref={sectionRef} aria-label="Render Section">
      <Container className="topContainer">
        <div className="slider-container">

          <div className="slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex ? "active" : ""}`}
              >
                <h4 className="text-center mainhead">{slide.title}</h4>
                <div className="renders-images">
                  {slide.images.map((image, imgIndex) => (
                    <div key={imgIndex} className={`images img${imgIndex + 0}`}>
                      <img
                        className="w-100 img-fluid d_sm_block"
                        src={image.md}
                        alt={`${slide.title} Image ${imgIndex + 1}`}
                      />
                      <img
                        className="w-100 img-fluid d_lg_block"
                        src={image.md}
                        alt={`${slide.title} Image ${imgIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="thumbnails">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`thumbnail ${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                  gsap.to(window, {
                    scrollTo: {
                      y:
                        sectionRef.current.offsetTop +
                        index * window.innerHeight,
                    },
                    duration: 1,
                  });
                  setActiveIndex(index);
                }}
              >
                <div className="thum_in w-100">
                  <div className="rounded_div">
                    <img
                      className="rounded_img"
                      src={slide.thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                  <span>{slide.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Renders;