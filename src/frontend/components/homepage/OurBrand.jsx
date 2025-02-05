import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";

import commitmentIcon from "../../assets/images/icons/brand/handshake.gif";
import excellenceIcon from "../../assets/images/icons/brand/growth.gif";
import customizedIcon from "../../assets/images/icons/brand/hand.gif";
import MobilebrandBG from "../../assets/images/icons/brand/our-brand-ethos-bg.webp";
import DesktopbrandBG from "../../assets/images/icons/brand/our-brand-ethos-bg.webp";
import headingIconImg from "../../assets/images/icons/heading-icon-img.webp";
import LeftSideBanner from "../../assets/images/icons/brand/our-brand-ethos-bg-2.webp";
import { useMatches } from "../../../theme/theme";

const brandData = [
  {
    title: "Commitment",
    para: `MVN develops and heightens competencies that show a realtor's dedication to code of Ethics & Standards of Practice.`,
    icon: commitmentIcon,
  },
  {
    title: "Excellence",
    para: `We deliver our clients with quality services and aim to exceed expectations in everything we offer.`,
    icon: excellenceIcon,
  },
  {
    title: "Customized Solutions",
    para: `We offer customer-focused solutions with a high level of accountability, and offer the highest level of honesty and expertise.`,
    icon: customizedIcon,
  },
];

const OurBrand = () => {
  const { isMobile } = useMatches();

  const titleRef = useRef();
  const dataRefs = useRef([]);

  return (
    <section className="section our_brand_section" aria-label="Brand Section">
      <LazyLoad>
        <img
          src={isMobile ? MobilebrandBG : DesktopbrandBG}
          alt="mvn brand-bg"
          className="brand_bg"
          loading="lazy"
        />
      </LazyLoad>

      <LazyLoad>
        <img
          src={LeftSideBanner}
          alt="mvn brand-bg"
          className="brand_bg brand_bg-2"
          loading="lazy"
        />
      </LazyLoad>

      <Container>
        <div className="heading_div  mb_60 mb_sm_30">
          <img
            src={headingIconImg}
            alt="mvn brand heading icon"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 ref={titleRef} className="title title_style1 text-center">
            Our Brand Ethos
          </h4>
        </div>

        <div className="brand_content">
          <Row>
            <div className="inner-ethos">
              {brandData?.map((item, index) => (
                <div key={index} className="box">
                  <div
                    ref={(el) => (dataRefs.current[index] = el)}
                    className="box-flex"
                  >
                    <div className="icon">
                      <img
                        src={item.icon}
                        alt="mvn brand icon"
                        className="img-fluid"
                        loading="lazy"
                      />
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
