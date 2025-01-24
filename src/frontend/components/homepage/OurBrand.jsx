import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import commitmentIcon from '../../assets/images/icons/brand/handshake.gif';
import excellenceIcon from '../../assets/images/icons/brand/growth.gif';
import customizedIcon from '../../assets/images/icons/brand/hand.gif';
import MobilebrandBG from '../../assets/images/icons/brand/our-brand-ethos-bg.webp';
import DesktopbrandBG from '../../assets/images/icons/brand/our-brand-ethos-bg.webp';
import headingIconImg from "../../assets/images/icons/heading-icon-img.webp";
import LeftSideBanner from "../../assets/images/icons/brand/our-brand-ethos-bg-2.webp";
import { useMatches } from "../../../theme/theme";


gsap.registerPlugin(ScrollTrigger);

const brandData = [
  {
    title: 'Commitment',
    para: `MVN develops and heightens competencies that show a realtor's dedication to code of Ethics & Standards of Practice.`,
    icon: commitmentIcon
  },
  {
    title: 'Excellence',
    para: `We deliver our clients with quality services and aim to exceed expectations in everything we offer.`,
    icon: excellenceIcon
  },
  {
    title: 'Customized Solutions',
    para: `We offer customer-focused solutions with a high level of accountability, and offer the highest level of honesty and expertise.`,
    icon: customizedIcon
  }
];

const OurBrand = () => {
  const { isMobile } = useMatches();

  const titleRef = useRef();
  const dataRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 95%",
        }
      });

      dataRefs.current.forEach((singleRef, index) => {
        if (singleRef) {
          gsap.from(singleRef, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: singleRef,
              start: "top 95%",
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section our_brand_section">
      <LazyLoad>
        <img
          src={isMobile ? MobilebrandBG : DesktopbrandBG}
          alt="mvn brand-bg"
          className="brand_bg"
        />
      </LazyLoad>

      <LazyLoad>
        <img
          src={LeftSideBanner}
          alt="mvn brand-bg"
          className="brand_bg brand_bg-2"
        />
      </LazyLoad>


      <Container>
        <div className="heading_div  mb_60 mb_sm_30">
          <img src={headingIconImg} alt="mvn brand heading icon" className="img-fluid title_plane1"/>
          <h4 ref={titleRef} className="title title_style1 text-center">Our Brand Ethos</h4>
        </div>

        <div className="brand_content">
          <Row>
          <div className="inner-ethos">
            {brandData?.map((item, index) => (
         
                <div key={index}   className="box">
                <div ref={(el) => (dataRefs.current[index] = el)} className="box-flex">
                  <div className="icon">
                    <img src={item.icon} alt="mvn brand icon" className="img-fluid" />
                  </div>
                    <div className="content">
                      <h4 className="title">{item.title}</h4>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
           



            ))}
               </div>

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default OurBrand;
