import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from 'swiper/modules';
import "./location_slider.css";
import { Container } from "react-bootstrap";
import { API_URL } from "../../../../config/config";
import useFetchData from "../../../utils/apiHelper";

const locationIcon = `${API_URL}bangalore/icon/location.png`;

const LocationSlider = ({project_id, projectName}) => {
  
  const { data, loading:projectLoading } = useFetchData(`project/${project_id}/location-advantage`);
  const [chunks, setChunks] = useState(3);

  useEffect(()=>{
    if(projectName.includes('mvn-athens-faridabad')){
      setChunks(1)
    }
  }, [projectName])

  // Function to chunk the array into groups of 5
  const chunkedItems = [];
  for (let i = 0; i < data?.length; i += chunks) {
    chunkedItems.push(data.slice(i, i + chunks));
  }

  console.log(new Set(chunkedItems))
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
          {chunkedItems?.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div
                className={`SliderContain ${
                  chunks < 4 ? (chunks === 3 ? "height_183" : "fit_height") : ""
                }`}
              >
                {chunk.map((item, subIndex) => (
                  <div key={subIndex}>
                    <p className="Heading">
                      <img
                        src={locationIcon}
                        alt="location img"
                        className="LocationImg"
                      />
                      {item.designation}
                    </p>
                    <p>{item.distance}</p>
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
