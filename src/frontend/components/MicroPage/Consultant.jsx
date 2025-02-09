import React, { useState } from "react";
import CustomCard from "../Card";
import { Col, Container, Row } from "react-bootstrap";
import * as CONFIG from '../../../config/config'

const Consultant = ()=>{

  return(
    <section className="section consultant_section pb-0" aria-label="Consultant Section">
      <Container>
          <CustomCard
            className="pt-0 px-0"
            title="About Architect" 
          />

          <Row className="mx_-40">
            <Col md={12} className="px_40">
              <div className="user_img">
                <img src={CONFIG.IMAGE_URL + 'hafeez_user.webp'} className="img-fluid w-100" alt="mvn hafeez image" loading="lazy" />
              </div>
            </Col>

            <Col md={12} className="px_40 mt-4 mt-md-4">
              <p className="des_style1 text-center">MVN Aero One is designed by one of the most celebrated architects in the world. Renowned for their innovative and iconic designs, this architecture company has crafted some of the world's most celebrated malls, blending aesthetic brilliance with functional excellence to create unparalleled shopping destinations globally.</p>

              <ul className="logos justify-content-center">
                <li>
                <img src={CONFIG.IMAGE_URL + 'micro/consultant/logo2.webp'} alt="mvn consultant logo 2" className="img-fluid logo" loading="lazy" />
                </li>
                <li>
                  <img src={CONFIG.IMAGE_URL + 'micro/consultant/logo1.png'} alt="mvn consultant logo 1" className="img-fluid logo" loading="lazy" />
                </li>
                <li>
                  <img src={CONFIG.IMAGE_URL + 'micro/consultant/logo3.webp'} alt="mvn consultant logo 3" className="img-fluid logo"  loading="lazy"/>
                </li>
              </ul>
            </Col>
          </Row>


      </Container>
    </section>
    
  )
}

export default Consultant