import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import useFetchData from "../utils/apiHelper";
import { BACKEND_IMAGE_URL } from "../../config/config";

const Construction = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const constructionData = data?.data;

  // const { data: constructionData, loading } = useFetchData(`project/${data?.project_id}/construction`);

  // Prepare slides for Lightbox
  const slides =
    constructionData?.map((image) => ({
      src: `${BACKEND_IMAGE_URL}${image.image}`,
      alt: image.alt,
    })) || [];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleCardKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleImageClick(index);
    }
  };

  return (
    <div
      className="section renders1_section wrappper center pb-0 Landscape-section"
      id="constructio"
    >
      <div
        className="heading_div mb_60 mb_sm_30"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          opacity: 1,
          transform: "translate(0px, 0px)",
        }}
      >
        <h4 className="title title_style1 text-center">{data?.heading}</h4>
      </div>

      <div className="cards-container">
        <div className="row">
          {constructionData?.map((images, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4">
              <div
                className="card center"
                role="button"
                tabIndex="0"
                onClick={() => handleImageClick(index)}
                onKeyDown={(event) => handleCardKeyDown(event, index)}
                style={{ cursor: "pointer" }}
              >
                <div className="img">
                  <div className="WaterMarkContainer undefined">
                    <div className="Watermark_artistic">
                      Artistic Impression
                    </div>
                    <div className="Watermark_logo athens_logo">
                      <picture>
                        <source
                          srcSet={`${BACKEND_IMAGE_URL}${images.sm_alternative_image}`}
                        />
                        <img
                          src={`${BACKEND_IMAGE_URL}${images.sm_image}`}
                          alt={images.alt}
                        />
                      </picture>
                    </div>
                  </div>
                  <div
                    className="an_img undefined active"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    <img
                      src={`${BACKEND_IMAGE_URL}${images.sm_image}`}
                      alt={images.alt}
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
                {data?.sub_heading}
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
        slides={slides}
        plugins={[]}
      />
    </div>
  );
};

export default Construction;
