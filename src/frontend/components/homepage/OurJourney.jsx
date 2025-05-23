import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LazyLoad from "react-lazyload";

import { API_URL } from "../../../config/config";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const OurJourney = () => {
  const titleRef = useRef();
  const contentRef = useRef([]);
  const journeyRef = useRef();
  const [journeyData] = useState([
    { icon: `${API_URL}images/icons/journey/new-icons/Helmet-.gif`, title: "Years Experience", value: "40+" },
    { icon: `${API_URL}images/icons/journey/new-icons/building.gif`, title: "Cities", value: "04" },
    { icon: `${API_URL}images/icons/journey/new-icons/handshake.gif`, value: "09", title: "Completed Projects" },
    { icon: `${API_URL}images/icons/journey/new-icons/crane.gif`, value: "04", title: "Ongoing Projects" },
    { icon: `${API_URL}images/icons/journey/new-icons/ruler.gif`, title: "Million Square Feet", value: "7.2" },
    { icon: `${API_URL}images/icons/journey/new-icons/calendar.gif`, title: "On-time Delivery", value: "100%" }, // Updated to include %
  ]);

  // Function to initialize animations
  const initializeAnimations = useCallback(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });

    // List items animation
    contentRef.current.forEach((conRef) => {
      if (conRef) {
        gsap.from(conRef, {
          y: 10,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: conRef,
            start: "top 95%",
          },
        });
      }
    });

    // Counter animation with % handling
    ScrollTrigger.create({
      trigger: journeyRef.current,
      start: "top 80%", // Start animation when section comes into view
      onEnter: () => {
        const items = document.querySelectorAll(".count");
        gsap.fromTo(
          items,
          { innerText: 0 },
          {
            innerText: (i) => journeyData[i].value,
            duration: 5,
            ease: "power1.in",
            snap: { innerText: 0.1 },
            stagger: 0.1,
            modifiers: {
              innerText: (value) => {
                const numericValue = parseFloat(value);
                const isPercentage = journeyData.some(
                  (data) => data.value === value && value.includes("%")
                );

                if (isPercentage) {
                  // Append % if the value includes %
                  return numericValue.toFixed(0) + "%";
                }

                // Handle float or integer formatting
                return numericValue % 1 !== 0
                  ? numericValue.toFixed(1)
                  : numericValue.toString();
              },
            },
            onComplete: () => updateStaticValues(), // Static update after animation
          }
        );
      },
    });
  }, []);

  // Function to statically update values
  const updateStaticValues = () => {
    const items = document.querySelectorAll(".count");
    items.forEach((item, index) => {
      item.innerText = journeyData[index].value;
    });
  };

  useEffect(() => {
    initializeAnimations();
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Initialize on mount

  return (
    <section className="section journey_section pb-0" aria-label="Journey Section">
      <LazyLoad height={200}>
        <img src={`${API_URL}images/our-story-bg.webp`} alt="mvn about background image" className="img-fluid about_bg" />
      </LazyLoad>

      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img src={`${API_URL}images/icons/heading-icon-img.webp`} alt="mvn infrastructure heading icon" className="img-fluid title_plane1" />
          <h4 ref={titleRef} className="title title_style1 text-center">
            {/* <span>Our Infrastructure </span> */}
            Our Infrastructure Real Estate Journey
          </h4>
        </div>

        <ul ref={journeyRef} className="journey_content">
          <li className="plane">
            <img
              src={`${API_URL}images/icons/heading-icon-img.webp`}
              alt="mvn plan icon"
              className="img-fluid diamond_icon"
            />
          </li>
          {journeyData?.map((item, index) => (
            <li
              className={`single ${index % 2 !== 0 ? "right" : ""}`}
              key={index}
            >
              <div
                className="data"
                ref={(el) => (contentRef.current[index] = el)}
              >
                <div className="top">
                  <img
                    src={item.icon}
                    alt="mvn journey icon"
                    className="img-fluid icon"
                  />
                  <p className="count">0</p> {/* Start with 0 */}
                </div>
                <p className="title">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default OurJourney;
