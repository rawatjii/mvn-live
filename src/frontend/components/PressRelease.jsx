import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function PressRelease({ data, slidesPerView, spaceBetween }) {
    return (
        <div className="press_release_slider">
            <Swiper
                spaceBetween={spaceBetween || 20}
                slidesPerView={slidesPerView || 3}
                navigation
                modules={[Navigation]}
                breakpoints={{
                    // Mobile view (768px and below)
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // Tablet view (768px to 1024px)
                    768: {
                        slidesPerView: slidesPerView || 2,
                        spaceBetween: spaceBetween || 15,
                    },
                    // Desktop view (1024px and above)
                    1024: {
                        slidesPerView: slidesPerView || 3,
                        spaceBetween: spaceBetween || 20,
                    },
                }}
            >
                {data.map((item, index) => (
    

                        <SwiperSlide key={index}>

<article class="awa_card awa_shadow">
    <div>
        <img src={item.thumbnail} alt={item.title} className="pressRelease-Img" />
        </div>
    <div>
        <p> {item.presscontent}</p>
        <div className=" awa_posted d-md-flex justify-content-between align-items-center"><span class="text-capitalize"><time>{item.EventDate}   </time></span>
            <p class="text-capitalize  " onClick={() => window.open(item.pdf, "_blank")}>View Details</p>
        </div>
    </div>
</article>


</SwiperSlide>



             
                ))}
            </Swiper>
        </div>
    );
}

export default PressRelease;
