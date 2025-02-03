import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules'; 
import './location_slider.css'
import { Container } from 'react-bootstrap';
import * as CONFIG from "../../../../config/config";
import locationIcon from "../../../assets/bangalore/icon/location.png"




const LocationSlider = ({data}) => {
  const {sliderItems,chunks} = data;

  // Function to chunk the array into groups of 5
  const chunkedItems = [];
  for (let i = 0; i < sliderItems.length; i += chunks) {
    chunkedItems.push(sliderItems.slice(i, i + chunks));
  }
  return (
    <Container>
    <div className="LocationSlider">
    <Swiper
      spaceBetween={20}
      loop={true}
      // navigation={true}
      // modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
       {chunkedItems.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className={`SliderContain ${chunks < 4 ?chunks === 3 ?"height_183" : "fit_height" : ''}`}>
                {chunk.map((item, subIndex) => (
                  <div key={subIndex}>
                  <p className='Heading'>
                    <img src={locationIcon} alt="location img" className='LocationImg'/>
                    {item.title}
                  </p>
                  <p>{item.desc}</p>
                </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
    </div>
    </Container>
  );
};

export default LocationSlider;


