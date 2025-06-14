import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LazyLoad from "react-lazyload";

import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const OurJourney = React.memo(({data}) => {
  const titleRef = useRef();
  const contentRef = useRef([]);
  const journeyRef = useRef();

  const {heading} = data;

  const { data:infraData, loading } = useFetchData("infrastructure");

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
    if(infraData && infraData.length > 0){
      ScrollTrigger.create({
        trigger: journeyRef.current,
        start: "top 80%", // Start animation when section comes into view
        onEnter: () => {
          const items = document.querySelectorAll(".countVal");
          gsap.fromTo(
            items,
            { innerText: 0 },
            {
              innerText: (i) => infraData?.[i]?.value || 0,
              duration: 5,
              ease: "power1.in",
              snap: { innerText: 0.1 },
              stagger: 0.1,
              modifiers: {
                innerText: (value) => {
                  const numericValue = parseFloat(value);
                  const isPercentage = infraData.some(
                    (data) => data.value === value && data.value.includes("%")
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
    }
    
  }, [infraData]);

  // Function to statically update values
  const updateStaticValues = () => {
    const items = document.querySelectorAll(".countVal");
    items.forEach((item, index) => {
      item.innerText = infraData?.[index]?.value;
    });
  };

  useEffect(() => {
    if(!loading && infraData){
      initializeAnimations();
    }
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loading, infraData]); // Initialize on mount

  

  if(loading) return <div className="text-center py-5">Loading...</div>;
  if(!loading && infraData && infraData.length === 0) return <div className="text-center py-5">No records found</div>;

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
            {heading}
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
          {infraData?.map((item, index) => (
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
                    src={BACKEND_IMAGE_URL + item.image}
                    alt="mvn journey icon"
                    className="img-fluid icon"
                  />
                  <p className="count"><span className="countVal">0</span>{item.symbol ? item.symbol : undefined}</p> {/* Start with 0 */}
                </div>
                <p className="title">{item.heading}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
});

export default OurJourney;
