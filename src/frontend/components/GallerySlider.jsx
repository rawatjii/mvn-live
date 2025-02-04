import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Navigation } from 'swiper/modules';
import Watermark from "../../common/watermark/Index";

function GallerySlider({ data, slidesPerView, spaceBetween, navigation }) {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = data.galleryData;

    console.log('images', images);
    

    return (
        <div className="gallery_slider">
            <Swiper
                spaceBetween={spaceBetween || 20}
                slidesPerView={slidesPerView || 3}
                navigation={navigation || false}
                modules={[Navigation]}
                breakpoints={{
                    // Mobile view (768px and below)
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // Tablet view (768px to 1024px)
                    768: {
                        slidesPerView: slidesPerView || 3,
                        spaceBetween: spaceBetween || 20,
                    },
                }}
            >
                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="position-relative sliderBg">
                            <Watermark className="left" />
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{ width: "100%", cursor: "pointer" }}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setOpen(true);
                                }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images}
                    index={currentIndex}
                />
            )}
        </div>
    );
}

export default GallerySlider;
