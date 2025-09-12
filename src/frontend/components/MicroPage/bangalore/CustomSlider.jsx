import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { BACKEND_IMAGE_URL } from "../../../../config/config";
import CustomModal from "../../../../common/Modal";
import { useLocation } from "react-router-dom";

const CustomSlider = ({ slides, className }) => {
  const [index, setIndex] = useState(-1);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { pathname } = useLocation();

  const isHideModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  const handleOpenBrochureModal = useCallback(() => {
    setIsShowModal(true);
    setIsVideoModalOpen(false);
  }, []);

  return (
    <>
      <Swiper
        className={className}
        spaceBetween={50} // space between slides
        slidesPerView={1} // number of slides visible at a time
        loop={true} // loop through slides
        //   autoplay={{delay:2000, disableOnInteraction:true}}
        pagination={{ clickable: true }} // pagination
        navigation={slides.length > 1 ? true : false} // enable navigation buttons
        modules={[Autoplay, Navigation]} // Import necessary modules
      >
        {slides.length === 0 ? (
          <div></div> // Show loading until slides are available
        ) : (
          slides.map((slide, index) => (
     <SwiperSlide key={index}>
              <div id="carousel" className="carousel">
                <div className="carousel-inner">
                  <div
                    className={`carousel-item ${
                      index === index ? "active" : ""
                    }`}
                  >
                    <div className="carousel-item_in">
                      <img
                      className={slide.heading=='Layout Plan'&& 'layout_plan'}
                        // data-speed="clamp(0.9)"
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        onClick={() => setIndex(index)}
                      />
                     {        slide.heading!='Layout Plan'&&  <div className="carousel-caption">
                        <h3 className="main-title">{slide.heading}</h3>
                        {slide.area && slide.area != 0 && (
                          <span className="mb-2 mb-md-0 d-block">
                            Area: {slide.area}
                          </span>
                        )}
                        <div className="link">
                          <button
                            className="btn p-0"
                            onClick={handleOpenBrochureModal}
                          >
                            View Details
                          </button>
                          {/* <a href={slide.link}>View Details</a> */}
                        </div>
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <Lightbox
        index={index} // Current index
        slides={slides.map((slide) => ({
          src: slide.image, // The image source
        }))} // Map slides to Lightbox format with additional data
        open={index >= 0} // Open Lightbox when an image is clicked
        close={() => setIndex(-1)} // Close Lightbox
        plugins={[Fullscreen, Zoom]} // Add Fullscreen and Zoom plugins
        render={{
          slide: ({ slide }) => (
            <div className="Typologies_Modal">
              <div className="Typologies_details">
                <div className="name">{slide.title}</div> {/* Display title */}
                <div className="area">{slide.area}</div> {/* Display area */}
              </div>
              {/* Optional: You can add the image explicitly here if you want */}
              <img src={slide.src} alt="Slide image" className="SlideImg" />
            </div>
          ),
        }}
      />

      <CustomModal
        hide={isHideModal}
        show={isShowModal}
        type="enquire"
        projectName={
          pathname.includes("mvn-athens-gurgaon-phase-1")
            ? "MVN Athens Ph-1"
            : pathname.includes("mvn-athens-gurgaon-phase-2")
            ? "MVN Athens Ph-2"
            : pathname.includes("mvn-athens-faridabad")
            ? "MVN Athens Faridabad"
            : pathname.includes("mvn-mall")
            ? "MVN Mall Dwarka Expressway"
            : "MVN Aeroone"
        }
        isVideoModal={isVideoModalOpen}
      />
    </>
  );
};

export default CustomSlider;
