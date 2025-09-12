import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import LazyLoad from "react-lazyload";

import AnImage from "../../../common/animations/Image/Index";
import { useMatches } from "../../../theme/theme";
import { API_URL } from "../../../config/config";



const Overview = () => {
  const titleRef = useRef();
  const desRefs = useRef([]);
  const imageRef = useRef();
 const { isMobile } = useMatches(); 

  return (

<>

    <section className="section about_overview pb-0" aria-label="Overview Section">
      <div className="content_col position-relative page-header-main-heading">
        <LazyLoad>
          <img src={`${API_URL}images/about/building_bg.png`} alt="mvn about background" className="img-fluid about_bg" />
        </LazyLoad>

        <Container>
          <div className="heading_div mb_60 mb_sm_30">
            <img src={`${API_URL}images/icons/heading-icon-img.webp`} alt="mvn overview image" className="img-fluid title_plane1"/>
            <h4 ref={titleRef} className="title title_style1 text-center">
              Building spaces <span>that help you grow</span>
            </h4>
          </div>
          <p ref={(el) => (desRefs.current[0] = el)} className="des_style1 text-center">
            At MVN, we are fired by an indomitable will to shape the future.
            We commenced our corporate journey in 1983 and have since evolved into a
            contemporary business entity with interests in education and real estate.
          </p>

          <p ref={(el) => (desRefs.current[1] = el)} className="des_style1 text-center">
            Our first educational venture, Modern Vidya Niketan School was conceived in 1983.
            Today it is one of the most respected and acclaimed schools in the field. Several
            other institutions in the NCR region bear our name and are considered the ideal
            learning grounds for budding destinies. Not content to rest on our laurels, we are
            today forging ahead with strategic forays into urban infrastructure development, real
            estate, and hospitality. We have identified prime locations for each of our projects
            and are convinced that these areas would be crucial to our resurgence and growth.
          </p>
        </Container>
      </div>

      {/* Image changes based on screen size */}
      <AnImage ref={imageRef} className="img_col">
        <img
          src={isMobile ? `${API_URL}images/about/desktopabout_img.webp` : `${API_URL}images/about/desktopabout_img.webp`}
          alt="mvn about background"
          className="img-fluid about_img"
        />
      </AnImage>
    </section>

    </>


  );
};

export default Overview;
