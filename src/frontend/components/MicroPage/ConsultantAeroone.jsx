import React, { useState } from "react";
import CustomCard from "../Card";
import { Col, Container, Row } from "react-bootstrap";
import * as CONFIG from '../../../config/config'

const ConsultantAeroone = ({data})=>{

  const {heading, image, alternative_image, alt, description, optional_images} = data;

  return(
    <section className="section consultant_section pb-0" aria-label="Consultant Section">
      <Container>
          <CustomCard
            className="pt-0 px-0"
            title={heading} 
          />

          <Row className="mx_-40 mx_sm_-15">
            <Col md={12} className="px_40 px_sm_15">
              <div className="user_img">
                <picture>
                  <source srcSet={image} />
                  <img
                    src={alternative_image}
                    alt={alt}
                    className="img-fluid w-100"
                    loading="lazy"
                  />
                </picture>
              </div>
            </Col>

            <Col md={12} className="px_40 mt-4 mt-md-4 px_sm_15">
              <p className="des_style1 text-center">{description}</p>

              <ul className="logos justify-content-center">
                <li>
                  <img src={optional_images} alt="mvn consultant logo 1" className="img-fluid logo" loading="lazy" />
                </li>
              </ul>
            </Col>
          </Row>


      </Container>
    </section>
    
  )
}

export default ConsultantAeroone