import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Col, Container, Row } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import CustomCard from '../Card';

gsap.registerPlugin(ScrollTrigger);

const images= [
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/5_sm.webp',
    watermark:'left',
    title:'Panaromic Living Room',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/7_sm.webp',
    watermark:'right',
    title:'Living Room',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/8_sm.webp',
    watermark:'left',
    title:'Cucina Kitchen',
  },  
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/6_sm.webp',
    watermark:'right',
    title:'Master Bedroom – Platinum',
  },  
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/9_sm.webp',
    watermark:'right',
    title:'Master Bedroom – Platinum',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/2.webp',
    watermark:'right',
    title:'Bathroom',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/1.webp',
    watermark:'right',
    title:'Master Bedroom – Royale',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/3.webp',
    watermark:'left',
    title:'Study Room',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/4_sm.webp',
    watermark:'right',
    title:'Kids\' Room',
  },
]

export default function ConstructionTechnology({ data }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);

  return (
    <section className='section constructionTech_section pb-0'>
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Construction Technology</h4>
        </div>

        <video src={CONFIG.VIDEO_URL + 'construction-technology.mp4'} autoPlay muted playsInline loop controls className='img-fluid' />

        {/* <iframe src="https://www.youtube.com/embed/9CHcJAveejU?si=Sr3K9ETfhxeyjrOW" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe> */}

        <div className='about'>
          <CustomCard
            className="px-0"
            title="Forging Future Foundations with Precision and Speed" 
            desc="In the fast-evolving world of construction, efficiency, durability, and adaptability are paramount. Aluminum Formwork emerges as a groundbreaking system, reshaping how residential and mass housing projects are constructed. This advanced technique, crafted from robust and lightweight aluminum components, offers unparalleled precision, rapid execution, and exceptional sustainability." 
          />
        </div>

        <h4 className='title_style2 mb_30 mb_sm_20 text-center'>Features Of Aluminum Formwork</h4>

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

        {/*<Row className='mx_-60'>

          <Col md={6} className='mt-2 mt-md-0 px_60'>
            <h4 className='title_style2 mb_30 mb_sm_20 text-center'>Features Of Aluminum Formwork</h4>

            <ul className=''>
              <li>
                <h6 className='name_style1'>Strength Beyond Limits</h6>
                <p className='des_style1 mt-2'>With a load capacity of 7-8 tons per square meter, this formwork ensures unrivaled structural integrity.</p>
              </li>

              <li>
                <h6 className='name_style1'>Fast-Track to Perfection</h6>
                <p className='des_style1 mt-2'>Achieve record-breaking construction cycles with a striking time of just 12-36 hours.</p>
              </li>

              <li>
                <h6 className='name_style1'>Durability That Defies Time</h6>
                <p className='des_style1 mt-2'>Built with structural-grade aluminum alloy, each panel lasts for up to 200 reuse cycles.</p>
              </li>

              <li>
                <h6 className='name_style1'>Precision-Crafted Excellence</h6>
                <p className='des_style1 mt-2'>Custom-designed to deliver flawless concrete finishes and accurate tolerances.</p>
              </li>

              <li>
                <h6 className='name_style1'>Green Innovation in Action</h6>
                <p className='des_style1 mt-2'>Lightweight, reusable, and efficient, reducing waste and optimizing resources.</p>
              </li>

              <li>
                <h6 className='name_style1'>Empowering Effortless Assembly</h6>
                <p className='des_style1 mt-2'>Designed for simplicity, enabling even unskilled labor to construct with ease.</p>
              </li>

            </ul>
          </Col>

          /~ <Col md={6} className='mt-5 mt-md-0 px_60'>
            <h4 className='title_style2 mb_30 mb_sm_20 text-center'>Advantages Of Aluminum Formwork</h4>

            <ul>
              <li>
                <h6 className='name_style1'>Consistency You Can Trust</h6>
                <p className='des_style1 mt-2'>Delivers uniform dimensions and high-quality concrete finishes every time.</p>
              </li>

              <li>
                <h6 className='name_style1'>Unmatched Speed and Efficiency</h6>
                <p className='des_style1 mt-2'>Speeds up construction without sacrificing precision or quality.</p>
              </li>

              <li>
                <h6 className='name_style1'>Eco-Friendly Excellence</h6>
                <p className='des_style1 mt-2'>Panels can be reused up to 250 times, reducing overall construction costs.</p>
              </li>

              <li>
                <h6 className='name_style1'>Tailored for Your Needs</h6>
                <p className='des_style1 mt-2'>Fully customizable system designed to meet specific project requirements.</p>
              </li>

              <li>
                <h6 className='name_style1'>Simplifying Complex Construction</h6>
                <p className='des_style1 mt-2'>Enables unskilled labor to execute projects efficiently with minimal training.</p>
              </li>

            </ul>
          </Col> ~/

        </Row>*/}
      </Container>
    </section>
  );
}
