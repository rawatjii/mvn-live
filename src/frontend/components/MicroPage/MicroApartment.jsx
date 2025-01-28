import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import CustomCard from '../Card';
import Logomark from '../../../common/logomark/Index';

gsap.registerPlugin(ScrollTrigger);

const images= [
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/5.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/5_sm.webp',
    watermark:'right',
    title:'Panoromic Living Room',
  },
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/7.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/7_sm.webp',
    watermark:'right',
    title:'Living Room',
  },
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/8.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/8_sm.webp',
    watermark:'right',
    title:'Cucina Kitchen',
  },  
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/6.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/6_sm.webp',
    watermark:'right',
    title:'Master Bedroom – Platinum',
  },  
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/9.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/9_sm.webp',
    watermark:'right',
    title:'Master Bedroom – Platinum',
  },
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/2.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/2_sm.webp',
    watermark:'right',
    title:'Bathroom',
  },
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/1.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/1_sm.webp',
    watermark:'right',
    title:'Master Bedroom – Royale',
  },
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/3.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/3_sm.webp',
    watermark:'right',
    title:'Study Room',
  },
  {
    thumbnail_desktop:CONFIG.IMAGE_URL + 'renders/apartment/4.webp',
    thumbnail_mobile:CONFIG.IMAGE_URL + 'renders/apartment/4_sm.webp',
    watermark:'right',
    title:'Kids\' Room',
  },
]

export default function MicroApartment({ data }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);

  return (
    <div className="section renders1_section wrapper center pb-0 Apartment-section">
        <div className="heading_div mb_60 mb_sm_30">
          <h4 className="title title_style1 text-center">Apartment</h4>
        </div>

        <div className="cards-container">
          <div className='row'>
            {images.map((image, index)=>(
              <div key={index} className='col-sm-12 col-md-4 col-lg-4'>
                <div  className="card center" onClick={() => setIndex(index)}>
                  <div className="img">
                    <img src={image.thumbnail_mobile} alt={`mvn apartment ${index}`} className='img-fluid apartment-section-img'  />
                    <Watermark className={image.watermark} />
                    <Logomark className="left sm" />
                  </div>
                  <div className="content">
                    <h4 className='title_style1'>{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <Container>
          <div className='about'>
            <CustomCard
              className="px-0 pb-0"
              title="Every corner a symphony of style & opulence" 
              desc="Experience ultra-luxury living in this exclusive apartment boasting plush interiors and bespoke design. The spacious layout includes a designer bathroom with premium fittings, a modern Cucina kitchen for culinary excellence, and a state-of-the-art home theatre for entertainment. A thoughtfully designed kids' room ensures comfort and fun, completing a perfect sanctuary for a sophisticated, family-friendly lifestyle." 
            />
          </div>
        </Container>


        <Lightbox
          index={index}
          slides={images.map(img=>({src:img.thumbnail_desktop}))} 
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom]}
        />

    </div>
  );
}
