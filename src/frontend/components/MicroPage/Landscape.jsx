import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";
import { Container } from "react-bootstrap";
import Watermark from "../../../common/watermark/Index";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import AnImage from "../../../common/animations/Image/Index";
import "yet-another-react-lightbox/styles.css";
import CustomCard from "../Card";
import Logomark from "../../../common/logomark/Index";

gsap.registerPlugin(ScrollTrigger);

const defaultLandscapeData = [
  {
    thumbnail_desktop: CONFIG.IMAGE_URL + "renders/landscape/1.webp",
    thumbnail_mobile: CONFIG.IMAGE_URL + "renders/landscape/1_sm.webp",
    watermark: "right",
    title: "Yoga Deck",
  },
  {
    thumbnail_desktop: CONFIG.IMAGE_URL + "renders/landscape/2.webp",
    thumbnail_mobile: CONFIG.IMAGE_URL + "renders/landscape/2_sm.webp",
    watermark: "right",
    title: "Swimming Pool",
  },
  {
    thumbnail_desktop: CONFIG.IMAGE_URL + "renders/landscape/3.webp",
    thumbnail_mobile: CONFIG.IMAGE_URL + "renders/landscape/3_sm.webp",
    watermark: "right",
    title: "Pergola View",
  },
];

export default function MicroLandscape({
  data = defaultLandscapeData,
  title = "Landscape",
}) {
  const sectionsRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const imageDivRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const initializeAnimations = () => {
    gsap.from(sectionsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 95%",
      },
    });

    imageDivRefs.current.forEach((imageDiv) => {
      if (imageDiv) {
        gsap.to(imageDiv, {
          scrollTrigger: {
            trigger: imageDiv,
            start: "top 95%",
            onEnter: () => imageDiv.classList.add("active"),
            once: true,
          },
        });
      }
    });
  };

  useEffect(() => {
    if (imagesLoaded === data.length) {
      initializeAnimations();
    }
  }, [imagesLoaded, data.length]);

  const handleImageLoad = () => setImagesLoaded((prev) => prev + 1);

  return (
    <div className="section renders1_section wrapper center pb-0 Landscape-section">
      {/* Title */}
      <div className="heading_div mb-60" ref={sectionsRef}>
        <h4 className="title title_style1 text-center">{title}</h4>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="row">
          {data.map((image, idx) => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={idx}>
              <div className="card center" onClick={() => setIndex(idx)}>
                <div className="img">
                  <Watermark className={image.watermark} />
                  <Logomark className="left sm" />
                  <AnImage ref={(el) => (imageDivRefs.current[idx] = el)}>
                    <img
                      src={image.thumbnail_mobile}
                      alt={image.title || `Landscape ${idx + 1}`}
                      onLoad={handleImageLoad}
                    />
                  </AnImage>
                </div>
                <div className="content">
                    <h4 className='title_style1 hide_after'>{image.title}</h4>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <Container>
          <div className="about">
            <CustomCard
              className="px-0 pb-0"
              title="REDEFINING ECO-LUXURY WITH ELEVATED LANDSCAPING"
              desc="Expansive lush green gardens landscaped for beauty and sustainability. Revel in this oasis of freshness and serenity exclusively for the residents."
            />
          </div>
        </Container>
      </div>

      {/* Lightbox */}
      <Lightbox
        index={index}
        slides={data.map((img) => ({ src: img.thumbnail_desktop }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </div>
  );
}
