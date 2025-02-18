import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import planeIcon from '../../assets/images/icons/plane1.png';

import ourValueIcon1 from '../../assets/images/about/growth.gif';
import ourValueIcon2 from '../../assets/images/about/growth-2.gif';
import ourValueIcon3 from '../../assets/images/about/Idea.gif';
import ourValueIcon4 from '../../assets/images/about/Verified.gif';

import headingIconImg from "../../assets/images/icons/heading-icon-img.webp";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const titleRef = useRef();
  const miniTitleRefs = useRef([]);
  const desRefs = useRef([]);

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
      }
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
          }
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
          }
        });
      }
    });

    // Refresh ScrollTrigger on resize
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);

  }, []);

  return (
    <section className="section philosophy_section pb-0">
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img src={headingIconImg} alt="mvn heading icon" className="img-fluid title_plane1" loading="lazy" />
          <h4 ref={titleRef} className="title title_style1 text-center">Our Philosophy</h4>
        </div>

        <div className="content">
          <div className="flex-li-row-1">
            <ul>
         <li>
            <h4 ref={(el) => miniTitleRefs.current[0] = el} className="title">
              <img src={planeIcon} alt="mvn-plan-icon" className="img-fluid icon"  loading="lazy"/>
              Our Vision
            </h4>
            <p ref={(el) => desRefs.current[0] = el}>
            We craft exceptional ecosystems that drive India’s growth, blending sustainability with global standards. From universities to urban spaces, we shape aspirations and achievements across India, from Khambi to Bengaluru.
            </p>
          </li>
          </ul>

          <ul>
          <li>
            <h4 ref={(el) => miniTitleRefs.current[1] = el} className="title">
              <img src={planeIcon} alt="mvn-plan-icon" className="img-fluid icon" loading="lazy" />
              Our Mission
            </h4>
            <p ref={(el) => desRefs.current[1] = el}>
              We build exceptional ecosystems that serve India’s high-growth ambitions. As part of our mission, we are creating a legacy of world-class real estate offerings that are locally relevant and sustainable yet meet global standards. We are building universities, urban infrastructure, hotels, and homes with equal zest across ‘aspiring’ to ‘arrived’ India – from Khambi to Bengaluru.
            </p>
          </li>
          </ul>
          </div>
          <div className="flex-li-row-2">
            <ul>
          <li>
            <h4 ref={(el) => miniTitleRefs.current[2] = el} className="title">
              <img src={planeIcon} alt="mvn-plan-icon" className="img-fluid icon" loading="lazy" />
              Our Values
            </h4>
            <ul ref={(el) => desRefs.current[2] = el} className="our-values-ul-icon">
              <li>
                <img src={ourValueIcon1} alt="mvn Enrich lives" className="img-fluid values-ul-icon" loading="lazy" />                
                Enrich lives
                </li>
              <li>
              <img src={ourValueIcon2} alt="mvn Empower ambitions" className="img-fluid values-ul-icon" loading="lazy" />   
                Empower ambitions
                </li>
              <li>
              <img src={ourValueIcon3} alt="mvn Drive innovation" className="img-fluid values-ul-icon" loading="lazy" />   
                Drive innovation
                
                </li>
              <li>
              <img src={ourValueIcon4} alt="mvn Inspire quality" className="img-fluid values-ul-icon" loading="lazy" />   
                Inspire quality
                </li>
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
