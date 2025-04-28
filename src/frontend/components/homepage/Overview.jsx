import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { API_URL } from "../../../config/config";


const Overview = ({className}) => {

  return (
    <>
      <div className="mobile-view-box">
        <Container>
          <div className="main_heading_box">
            <img 
              src={window.innerWidth <= 768 ? `${API_URL}mobile-line.png` : `${API_URL}desktop-line.png`} 
              alt="mvn sizes" 
              className="img-fluid"
            />
          </div>


          <img
            src={`${API_URL}mvn-aeroone-logo-img.webp`}
            alt="mvn aeroone logo"
            className="img-fluid mobile-img-logo"
            loading="lazy"
          />
          <h2 className="logo_title">Gurugram</h2>
          <span className="status">New Launch</span>

          {/* <div className="main_heading_box">
            <h1 className="sq-ft-heading">6300 - 12600 <small>sq. ft. Area</small></h1>
            <h4 className="main_subheading"><span>5.5 BHK</span> One of the <span>Largest Floor Sizes</span> in gurugram</h4>
          </div> */}

<div className="awards">
            <img src={`${API_URL}mvn-offer-without-logo.webp`} alt="awards icon" />
          </div>


          <h3 className="slogan-heading">
            Behold to Experience the complete view!
          </h3>
          <a
            href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
            className="btn btn_style3 r_100 mt-3 mt-md-4"
          >
            Click Here
          </a>
        </Container>
      </div>

      <section className={`${className} overview_section`} aria-label="Overview Section"> 
        <Row>
          <Col xs={12} md={12} className="about-content">
            <div className="home-about-content">
              <img src={`${API_URL}images/icons/heading-icon-img.webp`} alt="mvn head icon" className="img-fluid title_plane1"/>
              <h4 className="title_style1 text-center">40+ years of delivering trust and projects on time</h4>
              <p className="des_style1 text-center">
              MVN Infrastructure introduces MVN Aero One Residences, the largest ultra-luxury apartments in Delhi NCR, located at the 22-kilometer stone on Dwarka Expressway. These stunning 5.5 BHK residences offer breathtaking 360-degree panoramic views and set a new standard for luxury living. MVN is poised to add yet another wonder to the world.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Overview;
