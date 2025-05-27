import React from 'react';
import * as CONFIG from "../../../config/config";
import { Col, Container, Row } from 'react-bootstrap';

import CustomCard from '../Card';

export default function ConstructionTechnology({data}) {

  const {heading, video, sub_heading, description, short_description} = data;

  return (
    <section className='section constructionTech_section pb-0' aria-label="Construction Tech Section">
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">{heading}</h4>
        </div>
        
        <video src={CONFIG.BACKEND_IMAGE_URL + video} autoPlay  muted playsInline loop controls  className='img-fluid' />

        <div className='about'>
          <CustomCard
            className="px-0"
            title={sub_heading}
            desc={description}
          />
        </div>

        <h4 className='title_style2 mb_30 mb_sm_20 text-center'>{short_description}</h4>

        <Row className='mx_-60'>
          <Col md={6} className='mt-2 mt-md-0 px_60'>
            <div className="single">
              <h6 className='name_style1'>Strength Beyond Limits</h6>
              <p className='des_style1 mt-2'>With a load capacity of 7-8 tons per square meter, this formwork ensures unrivaled structural integrity.</p>
            </div>
          </Col>

          <Col md={6} className='mt-2 mt-md-0 px_60'>
            <div className="single">
              <h6 className='name_style1'>Fast-Track to Perfection</h6>
              <p className='des_style1 mt-2'>Achieve record-breaking construction cycles with a striking time of just 12-36 hours.</p>
            </div>
          </Col>

          <Col md={6} className='mt-2 mt-md-0 px_60'>
            <div className="single">
              <h6 className='name_style1'>Durability That Defies Time</h6>
              <p className='des_style1 mt-2'>Built with structural-grade aluminum alloy, each panel lasts for up to 200 reuse cycles.</p>
            </div>
          </Col>

          <Col md={6} className='mt-2 mt-md-0 px_60'>
            <div className="single">
              <h6 className='name_style1'>Precision-Crafted Excellence</h6>
              <p className='des_style1 mt-2'>Custom-designed to deliver flawless concrete finishes and accurate tolerances.</p>
            </div>
          </Col>

          <Col md={6} className='mt-2 mt-md-0 px_60'>
            <div className="single">
              <h6 className='name_style1'>Green Innovation in Action</h6>
              <p className='des_style1 mt-2'>Lightweight, reusable, and efficient, reducing waste and optimizing resources.</p>
            </div>
          </Col>

          <Col md={6} className='mt-2 mt-md-0 px_60'>
            <div className="single">
              <h6 className='name_style1'>Empowering Effortless Assembly</h6>
              <p className='des_style1 mt-2'>Designed for simplicity, enabling even unskilled labor to construct with ease.</p>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
}
