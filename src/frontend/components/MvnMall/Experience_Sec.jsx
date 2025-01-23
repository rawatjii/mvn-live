import React, { useState } from "react";
import Diamond from "../../assets/images/mvn-mall/diamond.png";
import HighlightedDiamond from "../../assets/images/mvn-mall/diamond-dark.png"; // Highlighted version
import DExp_Img1 from "../../assets/images/mvn-mall/dexp1.jpg";
import DExp_Img2 from "../../assets/images/mvn-mall/dexp2.jpg";
import DExp_Img3 from "../../assets/images/mvn-mall/dexp3.jpg";
import MExp_Img1 from "../../assets/images/mvn-mall/exp1.jpg";
import MExp_Img2 from "../../assets/images/mvn-mall/exp2.jpg";
import MExp_Img3 from "../../assets/images/mvn-mall/exp3.jpg";
import Carousel from "react-bootstrap/Carousel";

const Experience_Sec = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const thumbnails = [
    {
      id:1,
      src: Diamond,
      activeSrc: HighlightedDiamond,
      alt: "First slide thumbnail",
    },
    {
      id:2,
      src: Diamond,
      activeSrc: HighlightedDiamond,
      alt: "Second slide thumbnail",
    },
    {
      id:3,
      src: Diamond,
      activeSrc: HighlightedDiamond,
      alt: "Third slide thumbnail",
    },
  ];
  
  const imgSlid = [
    {
      id: 1,
      imgSlide: DExp_Img1,
      mimgSlide: MExp_Img1,
      content: "A Culinary Experience Bigger Than Your Imagination",
    },
    {
      id: 2,
      imgSlide: DExp_Img2,
      mimgSlide: MExp_Img2,
      content: "HOSPITALITY BIGGER THAN YOUR IMAGINATION",
    },
    {
      id: 3,
      imgSlide: DExp_Img3,
      mimgSlide: MExp_Img3,
      content: "ENTERTAINMENT BIGGER THAN YOUR IMAGINATION",
    },
  ];

  return (
    <section className="section experience-section">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
      >
        {imgSlid?.map((item, i) => (
          <Carousel.Item key={i}>
            <div class="image-exp">
              <img
                className="img-fluid w-100 d-view"
                src={item.imgSlide}
                alt="First slide"
              />
              <img
                className="img-fluid w-100 m-view"
                src={item.mimgSlide}
                alt="First slide"
              />
            </div>
            <div class="exp-content">
              <h4>{item.content}</h4>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Thumbnail Indicators */}
      <div className="custom-indicators d-flex justify-content-end mt-3 ">
        {thumbnails.map((thumbnail, idx) => (
          <>
            <img
              key={idx}
              src={index === idx ? thumbnail.activeSrc : thumbnail.src} // Switch image for active state
              alt={thumbnail.alt}
              className={`thumbnail-img ${index === idx ? "active" : ""}`}
              onClick={() => handleSelect(idx)}
              style={{
                cursor: "pointer",

                margin: "0 5px",
                border: "none", // No border
                borderRadius: "4px",
                objectFit: "cover",
              }}
            />
            
          </>
        ))}

      
      </div>
    </section>
  );
};

export default Experience_Sec;
