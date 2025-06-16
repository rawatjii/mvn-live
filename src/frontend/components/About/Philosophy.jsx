import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = ({data}) => {
  const titleRef = useRef();
  const miniTitleRefs = useRef([]);
  const desRefs = useRef([]);

  const {heading} = data;

  const { data:sectionsData } = useFetchData("page/page-section/about");
  const { data:valuesData, loading } = useFetchData("our-value");

  console.log('sectionsData',sectionsData);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
        end: "bottom 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Mini titles animation
    miniTitleRefs.current.forEach((title, index) => {
      if (title) {
        gsap.from(title, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.2, // Stagger effect
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Descriptions animation
    desRefs.current.forEach((des, index) => {
      if (des) {
        gsap.from(des, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.3, // Stagger effect
          scrollTrigger: {
            trigger: des,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Refresh ScrollTrigger on resize
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, []);

  return (
    <section
      className="section philosophy_section pb-0"
      aria-label="Philosophy Section"
    >
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img
            src={`${API_URL}images/icons/heading-icon-img.webp`}
            alt="mvn heading icon"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 ref={titleRef} className="title title_style1 text-center">
            {heading}
          </h4>
        </div>

        <div className="content">
          <div className="flex-li-row-1">
            {sectionsData?.map((sectionItem, sectionIndex)=>{
              if(sectionItem.page_section == 'about-vision' || sectionItem.page_section == 'about-mission'){
                return (
                  <ul>
                    <li>
                      <h4
                        ref={(el) => (miniTitleRefs.current[0] = el)}
                        className="title"
                      >
                        <img
                          src={`${API_URL}images/icons/plane1.png`}
                          alt="mvn plan icon"
                          className="img-fluid icon"
                          loading="lazy"
                        />
                        {sectionItem.heading}
                      </h4>
                      <p ref={(el) => (desRefs.current[0] = el)}>
                        {sectionItem.short_description}
                      </p>
                    </li>
                  </ul>
                )
              }
            })}
            
          </div>
          <div className="flex-li-row-2">
            <ul>
              <li>
                <h4
                  ref={(el) => (miniTitleRefs.current[2] = el)}
                  className="title"
                >
                  <img
                    src={`${API_URL}images/icons/plane1.png`}
                    alt="mvn plan icon"
                    className="img-fluid icon"
                    loading="lazy"
                  />
                  Our Values
                </h4>


                <ul
                  ref={(el) => (desRefs.current[2] = el)}
                  className="our-values-ul-icon"
                >
                    {valuesData?.map((el, index)=>(
                        <li key={index}>
                          <img
                            src={BACKEND_IMAGE_URL + el.image}
                            alt="mvn Enrich lives"
                            className="img-fluid values-ul-icon"
                            loading="lazy"
                          />
                          {el.heading}
                        </li>
                    ))}
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;
