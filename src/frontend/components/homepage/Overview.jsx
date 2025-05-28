import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { API_URL } from "../../../config/config";


const Overview = React.memo(({data}) => {

  const {heading, description} = data;

  return (
    <>
      <section className={`overview_section`} aria-label="Overview Section"> 
        <Row>
          <Col xs={12} md={12} className="about-content">
            <div className="home-about-content pb-0">
              <img src={`${API_URL}images/icons/heading-icon-img.webp`} alt="mvn head icon" className="img-fluid title_plane1"/>
              <h4 className="title_style1 text-center">{heading}</h4>
              <p className="des_style1 text-center">
              {description}
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
})

export default Overview;
