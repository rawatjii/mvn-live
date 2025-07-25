import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Construction = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of construction images with thumbnails and large versions
  const constructionImages = [
    {
      thumbnail: "https://img.websitedesigningcompany.co.in/public/athens-gurgaon-phase-3/construction-update/construction1_sm.webp",
      src: "https://img.websitedesigningcompany.co.in/public/athens-gurgaon-phase-3/construction-update/construction1.webp",
      alt: "Construction Update 1"
    },
    {
      thumbnail: "https://img.websitedesigningcompany.co.in/public/athens-gurgaon-phase-3/construction-update/construction2_sm.webp",
      src: "https://img.websitedesigningcompany.co.in/public/athens-gurgaon-phase-3/construction-update/construction2.webp",
      alt: "Construction Update 2"
    },
    {
      thumbnail: "https://img.websitedesigningcompany.co.in/public/athens-gurgaon-phase-3/construction-update/construction3_sm.webp",
      src: "https://img.websitedesigningcompany.co.in/public/athens-gurgaon-phase-3/construction-update/construction3.webp",
      alt: "Construction Update 3"
    }
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleCardKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleImageClick(index);
    }
  };

  return (
    <div className="section renders1_section wrapper center pb-0 Landscape-section" id='constructio'>
      <div 
        className="heading_div mb_60 mb_sm_30"
        style={{
          translate: 'none',
          rotate: 'none', 
          scale: 'none',
          opacity: 1,
          transform: 'translate(0px, 0px)'
        }}
      >
        <h4 className="title title_style1 text-center">Construction Update</h4>
      </div>
      
      <div className="cards-container">
        <div className="row">
          {constructionImages.map((image, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4">
              <div 
                className="card center" 
                role="button" 
                tabIndex="0"
                onClick={() => handleImageClick(index)}
                onKeyDown={(event) => handleCardKeyDown(event, index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="img">
                  <div className="WaterMarkContainer undefined">
                    <div className="Watermark_artistic">Artistic Impression</div>
                    <div className="Watermark_logo athens_logo">
                      <img
                        src="https://img.websitedesigningcompany.co.in/public/assets/athens_logo.webp" 
                        alt="mvn logo image"
                      />
                    </div>
                  </div>
                  <div 
                    className="an_img undefined active"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      transform: 'translate(0px, 0px)',
                      opacity: 1
                    }}
                  >
                    <img
                      src={image.thumbnail}
                      alt={image.alt}
                      className="undefined lazy-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="container">
          <div className="about">
            <div className="overview_card px-0 pb-0">
              <div className="diamond_img_strip">
                <img
                  src="https://img.websitedesigningcompany.co.in/public/images/icons/plane.png" 
                  className="img-fluid"
                  alt="plane image"
                />
              </div>
              <p className="desc des_style1 text-center w-100 undefined">
                Transparency in every frame—watch MVN Athens rise, step by step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={constructionImages}
        plugins={[]}
      />
    </div>
  );
};

export default Construction;