import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";
import useFetchData from "../../utils/apiHelper";

const Testimonial = ({data}) => {
  const titleRef = useRef();
  const contentRef = useRef();

  const {heading} = data;

  const { data:testimonialData, loading } = useFetchData("testomonials");

  if(loading) return <div className="text-center py-5">Loading...</div>;
    if(!loading && testimonialData && testimonialData.length === 0) return <div className="text-center py-5">No records found</div>;

  return (
    <section
      className="section testimonial_section"
      aria-label="Testimonial Section"
    >
      <Container>
        <div className="heading_div mb_60 mb_sm_30">
          <img
            src={`${API_URL}images/icons/heading-icon-img.webp`}
            alt="mvn heading image"
            className="img-fluid title_plane1"
            loading="lazy"
          />
          <h4 ref={titleRef} className="title title_style1 text-center">
            {heading}
          </h4>
        </div>

        <Swiper
          ref={contentRef}
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial_carousel"
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1298: {
              // Desktop
              slidesPerView: 3,
              spaceBetween: 50,
            },
            868: {
              // Tablet
              slidesPerView: 2,
              spaceBetween: 20,
            },
            0: {
              // Mobile
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {testimonialData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="single">
                <div className="content">
                  <div className="flex-content-box">
                    <div className="flex-heading-row">
                      <img
                        src={`${API_URL}images/icons/quote.png`}
                        alt="mvn quotes icon"
                        className="img-fluid quote_icon"
                        loading="lazy"
                      />
                      <h5 className="title">{item.title}</h5>
                    </div>
                    <p className="msg">{item.description}</p>
                  </div>
                  <div className="flex-name-pic">
                    <picture className="w-100">
                      <source srcset={BACKEND_IMAGE_URL + item.image} />
                      <img src={BACKEND_IMAGE_URL + item.alternative_image} alt="mvn quotes icon" className="img-fluid testimonial-pic" loading="lazy" />
                    </picture>
                    <p className="testimonial-name w-100">~{item.name}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Add navigation buttons */}
        <div
          className="swiper-button-prev"
          role="button"
          aria-label="previous button"
        ></div>
        <div
          className="swiper-button-next"
          role="button"
          aria-label="next button"
        ></div>
      </Container>
    </section>
  );
};

export default Testimonial;
