import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Container } from "react-bootstrap";
import Watermark from "../../../common/watermark/Index";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import AnImage from "../../../common/animations/Image/Index";
import "yet-another-react-lightbox/styles.css";
import CustomCard from "../Card";
import Logomark from "../../../common/logomark/Index";

 function ImagesGallery({ data }) {
  const sectionsRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const imageDivRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const { title, images, desc, secondTitle, imageClassName } = data;

  // Memoized mapped slides for Lightbox
  const slides = useMemo(
    () => images.map((img) => ({ src: img.desktop })),
    [images]
  );

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => prev + 1);
  }, []);

  // Memoized images map for rendering cards
  const imageCards = useMemo(() => {
    return images.map((image, idx) => {
      const imageRef = (el) => {
        // Assign the ref to the correct index in the refs array
        imageDivRefs.current[idx] = el;
      };
      
      return (
        <div className="col-sm-12 col-md-4 col-lg-4" key={idx}>
          <div className="card center" onClick={() => setIndex(idx)}>
            <div className="img">
              <Watermark className={image.watermark} />
              <AnImage ref={imageRef}>
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
      );
    });
  }, [images, title, imageClassName, handleImageLoad]);

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

  const lightbox_watermark = "lightbox_watermark";
  
  return (
    <div className="section renders1_section wrapper center pb-0 Landscape-section">
      {/* Title */}
      {title && (
        <div className="heading_div mb_60 mb_sm_30" ref={sectionsRef}>
          <h4 className="title title_style1 text-center">{title}</h4>
        </div>
      )}

      {/* Cards */}
      <div className="cards-container">
        <div className="row">{imageCards}</div>

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
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
        render={{
          slide: ({ slide }) => (
            <div className='Img_Container'>
              <img
                src={slide.src}
                alt="landscape image"
                className='LightBox_image'
              />
              <Watermark className={lightbox_watermark} />
            </div>
          ),
        }}
      />
    </div>
  );
}

export default React.memo(ImagesGallery);
