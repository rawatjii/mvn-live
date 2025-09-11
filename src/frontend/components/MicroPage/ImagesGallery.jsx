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
import useFetchData from "../../utils/apiHelper";
import { BACKEND_IMAGE_URL } from "../../../config/config";

 function ImagesGallery({ data, section_name, showTitle }) {
  const sectionsRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const imageDivRefs = useRef([]);
  // const [imagesLoaded, setImagesLoaded] = useState(0);
  const { heading, sub_heading, description, secondTitle, imageClassName, project_id, section_type } = data;

  const { data:projectData, loading:projectLoading } = useFetchData(`project/${project_id}/${section_name ? section_name : section_type}`);

  // Memoized mapped slides for Lightbox
  const slides = useMemo(
    () => projectData?.map((img) => ({ src: BACKEND_IMAGE_URL + img.image })),
    [projectData]
  );

  // const handleImageLoad = useCallback(() => {
  //   setImagesLoaded((prev) => prev + 1);
  // }, []);


  // Memoized images map for rendering cards
  const imageCards = useMemo(() => {
    if(!projectData) return [];

    const images = Array.isArray(projectData) ? projectData : [projectData];

    return images?.map((image, idx) => {
      const imageRef = (el) => {
        // Assign the ref to the correct index in the refs array
        imageDivRefs.current[idx] = el;
      };
      
      return (
        <div className="col-sm-12 col-md-4 col-lg-4" key={idx}>
          <div className="card center" onClick={() => setIndex(idx)}>
            <div className="img">
              <Watermark className={image?.watermark} />
              <AnImage ref={imageRef}>
                <picture>
                  <source srcSet={BACKEND_IMAGE_URL + image.sm_image} />
                  <img
                    src={BACKEND_IMAGE_URL + image.sm_alternative_image}
                    alt={image.alt}
                    className={`${imageClassName} lazy-image`}
                    // onLoad={handleImageLoad}

                  />
                </picture>
                {/* <img
                  src={image.mobile}
                  alt={image.title || `${title} ${idx + 1}`}
                  onLoad={handleImageLoad}
                  className={`${imageClassName} lazy-image`}
                /> */}
              </AnImage>
            </div>
            {showTitle && image.title && (
              <div className="content">
                <h4 className="title_style1 hide_after">{image.title}</h4>
              </div>
            )}
          </div>
        </div>
      );
    });
  }, [projectData]);

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
 
      initializeAnimations();
  }, [projectData]);

  const lightbox_watermark = "lightbox_watermark";

  if(projectLoading) return <div className="text-center py-5"></div>;
  if(!projectLoading && projectData && projectData.length === 0) return <div className="text-center py-5">No records found</div>;
  
  return (
    <div className="section renders1_section wrapper center pb-0 Landscape-section">
      {/* Title */}
      {heading && (
        <div className="heading_div mb_60 mb_sm_30" ref={sectionsRef}>
          <h4 className="title title_style1 text-center">{heading}</h4>
        </div>
      )}

      

      {/* Cards */}
      <div className="cards-container">
        <div className="row">{imageCards}</div>

        {/* Description */}
        {(sub_heading || description) && (
          <Container>
            <div className="about">
              <CustomCard
                className="px-0 pb-0"
                title={sub_heading || ""}
                desc={description || ""}
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

export default ImagesGallery;