import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import useFetchData from "../utils/apiHelper";
import { BACKEND_IMAGE_URL } from "../../config/config";
import * as CONFIG from "../../config/config";
import { Link } from "react-router-dom";

function Events() {
  const { data, loading } = useFetchData("media/event");

  if (loading) return <div className="text-center py-5"></div>;
  if (!loading && data && data.length === 0)
    return <div className="text-center py-5">No records found</div>;

  return (
    <>
      {data &&
        data.map((item, index) => (
          <div className="col-sm-4" key={`event-${index}`}>
            <div className="media-event-content">
              <Link
                to={item.links}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={BACKEND_IMAGE_URL + item.image}
                  alt={item.alt}
                  className="img-fluid event-video-banner"
                />

                <img
                  src={`${CONFIG.API_URL}images/mediacenter/play-button.png`}
                  alt={`mvn events ${index}`}
                  className="img-fluid play-icon"
                />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}

export default Events;
