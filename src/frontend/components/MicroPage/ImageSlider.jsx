import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function ImageSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [
      'https://via.placeholder.com/800x400?text=Slide+1',
      'https://via.placeholder.com/800x400?text=Slide+2',
      'https://via.placeholder.com/800x400?text=Slide+3',
      'https://via.placeholder.com/800x400?text=Slide+4'

    ]
    
    


  return (
    <>
        <div className='container-fluid'>
            <div className="slider_ppt_container">
                <div className="slider_list">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >

                        {
                            images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} className='img-fluid' />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="slider_preview">
                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >

                        {
                            images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} className='img-fluid w-100' />
                                </SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
                </div>
            </div>
        </div>






        
      
    </>
  )
}

export default ImageSlider