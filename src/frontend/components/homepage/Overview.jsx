import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../../assets/images/overview/bg.webp';
import buildingImg from '../../assets/images/overview/building.webp';
import buildingImgBanner from '../../assets/images/overview/home-about.webp';
import headingIconImg from "../../assets/images/icons/heading-icon-img.webp";



gsap.registerPlugin(ScrollTrigger);

const Overview = ({className}) => {
  const imageRef = useRef();
  const secRef = useRef();

  return (
    <>
      <section className={`${className} overview_section`}> 
        <Row>
          <Col xs={12} md={12} className="about-content">
            <div className="home-about-content">
              <img src={headingIconImg} alt="mvn head icon" className="img-fluid title_plane1"/>
              <h4 className="title_style1 text-center">40+ years of delivering trust and projects on time</h4>
              <p className="des_style1 text-center">
              MVN Infrastructure introduces MVN Aero One Residencies, the largest ultra-luxury apartments in Delhi NCR, located at the 22-kilometer stone on Dwarka Expressway. These stunning 5.5 BHK residences offer breathtaking 360-degree panoramic views and set a new standard for luxury living. MVN is poised to add yet another wonder to the world.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Overview;
