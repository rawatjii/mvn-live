import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import AnImage from "../../../common/animations/Image/Index";
import Logomark from '../../../common/logomark/Index';
import CustomCard from '../Card';

import "yet-another-react-lightbox/styles.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    assets: {
      desktop:CONFIG.IMAGE_URL + 'renders/elevation/1.webp',
      mobile:CONFIG.IMAGE_URL + 'renders/elevation/1_sm.webp',
    },
    watermark: 'right'
  },
  {
    assets: {
      desktop:CONFIG.IMAGE_URL + 'renders/elevation/2.webp',
      mobile:CONFIG.IMAGE_URL + 'renders/elevation/2_sm.webp',
    },
    watermark: 'right'
  },
  {
    assets: {
      desktop:CONFIG.IMAGE_URL + 'renders/elevation/3.webp',
      mobile:CONFIG.IMAGE_URL + 'renders/elevation/3_sm.webp',
    },
    watermark: 'right'
  }
];

export default function MicroElevation({ data = images }) {
  const [index, setIndex] = useState(-1);
  const imageDivRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);  // Add imagesLoaded state

  const initializeAnimations = () => {
    if (data.length > 0) {
      // Add animation for AnImage components using imageDivRefs
      imageDivRefs.current.forEach((imagediv, index) => {
        if (imagediv) {
          gsap.to(imagediv, {
            scrollTrigger: {
              trigger: imagediv,
              start: "top 95%",
              onEnter: () => imagediv.classList.add("active"),
              once: true,
            },
          });
        }
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // ScrollTrigger.refresh();
    };

    if (imagesLoaded === data.length) {
      setTimeout(() => {
        initializeAnimations();
        // ScrollTrigger.refresh();
      }, 300);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, data.length]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <div className="section renders1_section wrapper center pb-0">
      <div className="heading_div mb_60 mb_sm_30" >
        <h4 className="title title_style1 text-center">Elevation</h4>
      </div>

      <div className="cards-container">
        <div className='row'>
          {images.map((image, index) => (
            <div className='col-sm-12 col-md-4 col-lg-4' key={index}>
              <div className="card center" onClick={() => setIndex(index)}>
                {/* Wrapping image in AnImage component for animation */}
                <AnImage ref={(el) => (imageDivRefs.current[index] = el)}>
                  <img src={image.assets.mobile} alt={`mvn elevation ${index}`} className='img-fluid elevation-section-img '  onLoad={handleImageLoad} />
                  <Watermark className={image.watermark} />
                  <Logomark className="left sm" />
                </AnImage>
              </div>
            </div>
          ))}
        </div>

        <Container>
          <div className='about'>
            <CustomCard
              className="px-0 pb-0"
              title="Pinnacle of Sophisticated Luxury" 
              desc="This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits." 
            />
          </div>
        </Container>
      </div>

      <Lightbox
        index={index}
        slides={images.map(img => ({ src: img.assets.desktop }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </div>
  );
}
