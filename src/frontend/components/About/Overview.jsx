import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LazyLoad from "react-lazyload";

import AnImage from "../../../common/animations/Image/Index";
import { useMatches } from "../../../theme/theme";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const Overview = React.memo(({ data }) => {
  const titleRef = useRef();
  const desRefs = useRef([]);
  const imageRef = useRef();
  const { isMobile } = useMatches();

  const {heading, short_description, description, image, alternative_image, alt, mb_image, mb_alternative_image} = data;

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });

    // Description animations
    desRefs.current.forEach((desRef, index) => {
      gsap.from(desRef, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2, // Staggered effect
        scrollTrigger: {
          trigger: desRef,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Image animation with class addition
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        onEnter: () => {
          if (imageRef.current) {
            imageRef.current.classList.add("active");
          }
        },
        once: true,
      },
    });

    // Refresh ScrollTrigger on resize for layout consistency
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, []);

  return (
    <>
      <section
        className="section about_overview pb-0"
        aria-label="Overview Section"
      >
        <div className="content_col position-relative page-header-main-heading">
          <LazyLoad>
            <img
              src={`${API_URL}images/about/building_bg.png`}
              alt="mvn about background"
              className="img-fluid about_bg"
            />
          </LazyLoad>

          <Container>
            <div className="heading_div mb_60 mb_sm_30">
              <img
                src={`${API_URL}images/icons/heading-icon-img.webp`}
                alt="mvn overview image"
                className="img-fluid title_plane1"
              />
              <h4 ref={titleRef} className="title title_style1 text-center">
                {heading}
              </h4>
            </div>
            <p
              ref={(el) => (desRefs.current[0] = el)}
              className="des_style1 text-center"
            >
              {short_description}
            </p>

            <p
              ref={(el) => (desRefs.current[1] = el)}
              className="des_style1 text-center"
            >
              {description}
            </p>
          </Container>
        </div>

        {/* Image changes based on screen size */}
        <AnImage ref={imageRef} className="img_col">
          <picture>
            <source srcset={window.innerWidth < 768 ? BACKEND_IMAGE_URL + mb_image : BACKEND_IMAGE_URL + image} />
            <img src={window.innerWidth < 768 ? BACKEND_IMAGE_URL + mb_alternative_image : BACKEND_IMAGE_URL + alternative_image} alt={alt} className="img-fluid about_img" />
          </picture>
        </AnImage>
      </section>
    </>
  );
});

export default Overview;
