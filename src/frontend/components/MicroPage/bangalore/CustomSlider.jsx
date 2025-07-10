import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import CustomModal from "../../../../common/Modal";

const CustomSlider = ({ slides, className, projectName }) => {
  const [index, setIndex] = useState(-1);
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = ()=>{
    setIsShowModal(true)
  }

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
          <div>Loading...</div> // Show loading until slides are available
        ) : (
          slides.map((slide, index) => {
            if (typeof slide == "string") {
              return (
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
                            // data-speed="clamp(0.9)"
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            onClick={() => setIndex(index)}
                            className="layout_plan"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
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
                            // data-speed="clamp(0.9)"
                            src={slide.src}
                            alt={`Slide ${index + 1}`}
                            onClick={() => setIndex(index)}
                          />

                          <div className="carousel-caption">
                            <h3 className="main-title">{slide.title}</h3>
                            {slide.area && <span>Area: {slide.area}</span>}
                            <div className="link">
                              <a href="#_" onClick={showModal}>View Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })
        )}
      </Swiper>
      <Lightbox
        index={index} // Current index
        slides={slides.map((slide) => {
          if (typeof slide == "string") {
            return {
              src: slide, // The image source
            };
          } else {
            return {
              src: slide.src, // The image source
              title: slide.title, // The title of the image
              area: slide.area, // The area of the image
            };
          }
        })} // Map slides to Lightbox format with additional data
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

      <CustomModal type="enquire" hide={()=>setIsShowModal(false)} show={isShowModal} projectName={projectName}  />
    </>
  );
};

export default CustomSlider;
