import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Watermark from "../../../common/watermark/Index";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import AnImage from "../../../common/animations/Image/Index";
import "yet-another-react-lightbox/styles.css";
import CustomCard from "../Card";
import Logomark from "../../../common/logomark/Index";

export default function ImagesGallery({ data }) {
  const sectionsRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const imageDivRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const { title, images, desc, secondTitle, imageClassName } = data;

  const initializeAnimations = async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    // Heading Animation
    gsap.from(sectionsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 95%",
        once: true,
      },
    });

    // Batched Image Animations
    ScrollTrigger.batch(imageDivRefs.current, {
      start: "top 95%",
      onEnter: (batch) => {
        gsap.to(batch, { opacity: 1, scale: 1, stagger: 0.2 });
        batch.forEach((el) => el.classList.add("active"));
      },
      once: true,
    });
  };

  useEffect(() => {
    if (imagesLoaded === images.length) {
      initializeAnimations();
    }
  }, [imagesLoaded, images.length]);

  const handleImageLoad = () => setImagesLoaded((prev) => prev + 1);

  return (
    <div className="section renders1_section wrapper center pb-0 Landscape-section">
      {/* Title */}
      {title && (
        <div className="heading_div mb-60" ref={sectionsRef}>
          <h4 className="title title_style1 text-center">{title}</h4>
        </div>
      )}

      {/* Cards */}
      <div className="cards-container">
        <div className="row">
          {images.map((image, idx) => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={idx}>
              <div className="card center" onClick={() => setIndex(idx)}>
                <div className="img">
                  <Watermark className={image.watermark} />
                  <Logomark className="left sm" />
                  <AnImage ref={(el) => (imageDivRefs.current[idx] = el)}>
                    <img
                      src={image.mobile}
                      alt={image.title || `${title} ${idx + 1}`}
                      onLoad={handleImageLoad}
                      className={`${imageClassName} lazy-image`}
                    />
                  </AnImage>
                </div>
                {image.title && (
                  <div className="content">
                    <h4 className="title_style1">{image.title}</h4>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        {(secondTitle || desc) && (
          <Container>
            <div className="about">
              <CustomCard
                className="px-0 pb-0"
                title={secondTitle || ""}
                desc={desc || ""}
              />
            </div>
          </Container>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        index={index}
        slides={images.map((img) => ({ src: img.desktop }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </div>
  );
}
