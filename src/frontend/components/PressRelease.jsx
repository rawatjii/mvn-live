import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useFetchData from "../utils/apiHelper";
import { BACKEND_IMAGE_URL } from "../../config/config";

function PressRelease({slidesPerView, spaceBetween }) {

    const { data, loading } = useFetchData("media/press");

  if (loading) return <div className="text-center py-5"></div>;
  if (!loading && data && data.length === 0)
    return <div className="text-center py-5">No records found</div>;


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
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="awa_card awa_shadow">
              <div>
                <img
                  src={BACKEND_IMAGE_URL + item.image}
                  alt={item.alt}
                  className="pressRelease-Img"
                />
              </div>
              <div>
                <p> {item.heading}</p>
                <div className=" awa_posted d-md-flex justify-content-between align-items-center">
                  <span className="text-capitalize">
                    <time>{new Date(item.date_at).toLocaleDateString('default',{
                        day:'numeric',
                        month:'long',
                        year:'numeric'
                    })} </time>
                  </span>
                  <p
                    className="text-capitalize  "
                    onClick={() => window.open(item.links, "_blank")}
                  >
                    View Details
                  </p>
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
