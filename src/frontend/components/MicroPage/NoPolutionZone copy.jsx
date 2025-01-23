import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";
import SecTitle from "../../../common/SecTitle/Index";
import dotImg from "../../assets/images/icons/dot.png"
import mvnMallBannerImg1 from "../../assets/images/mall-banner-1.webp"
import mvnMallBannerImg2 from "../../assets/images/mall-banner-2.webp"

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import CustomCard from "../Card";


gsap.registerPlugin(ScrollTrigger);

const NoPolutionZone = () => {
  const titleRef = useRef();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRendered, setSectionRendered] = useState(false);


  const pageData = [
    // {
    //   title: 'An oasis of clean air and pure living',
    //   desc:'Advanced air purification systems create pollution-free zones, ensuring residents breathe clean, fresh air, promoting healthier living and well-being.',
    //   imgSrc: window.innerWidth <= 768 ? 'central-green.webp' : 'central-green.webp'
    // },
    {
      title: '0 km from all the urban needs 0km from your office',
      desc:'Now you don’t have to even walk to work. Take a ride on your exclusive elevator to work',
      imgSrc: window.innerWidth <= 768 ? 'office.webp' : 'desktop/office.jpg'
    },
    {
      title: '0 km from luxury Shopping',
      desc:'All the best of luxury shopping and brands from the world over, right at your doorstep at MVN Mall',
      imgSrc: window.innerWidth <= 768 ? 'shopping.webp' : 'desktop/shopping.jpg'
    },
    {
      title: '0 km from Global Entertainment',
      desc:'When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall.',
      imgSrc: window.innerWidth <= 768 ? 'entertainment.webp' : 'desktop/entertainment.jpg'
    },
    {
      title: '0 km from the Sports Club & Lounge',
      desc:'Make sports a regular part of your life. Participate in sports events and also follow your passion to play your favourite sports, at the exclusive Sports Lounge and Sports Club.',
      imgSrc: window.innerWidth <= 768 ? 'sports.webp' : 'desktop/sports.jpg'
    },
    {
      title: '0 km cinema',
      desc:'Have a blockbuster of a time, without ever missing a show due to traffic. Catch up with all the superhits at the theatres below in the MVN mall.',
      imgSrc: window.innerWidth <= 768 ? 'cinema.jpg' : 'desktop/cinema.jpg'
    },
  ]

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;


    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSlides = swiperInstance.slides.length - 1;
        const targetSlide = Math.floor(progress * totalSlides);

        swiperInstance.slideTo(targetSlide);
      },
      onLeave: () => {
        swiperInstance.slideTo(swiperInstance.slides.length - 1);
      }
    });

    setSectionRendered(true)

    swiperInstance.on("slideChange", () => {
      setActiveIndex(swiperInstance.activeIndex);
    });
  }, []);

  return (
<>
    <div>
      <section
      className="section location_section"
      ref={sectionRef}
    >
      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Connections with MVN Mall</h4>
        </SecTitle>
      </Container>

      {/* Images */}
      <div className="image_col">
        {pageData && pageData.map((image, index) => (
          <li
            key={index}
            style={{
              display: index === activeIndex ? "block" : "none",
            }}
          >
            <img src={`${CONFIG.IMAGE_URL}/no-pollution/${image.imgSrc}`} alt="mvn no pollution image" />
          </li>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        // slidesPerView={1}
        // spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
        ref={swiperRef}
        scrollbar={{
          hide: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[Scrollbar, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >

        {
          pageData && pageData.map((data, index) => (
            <SwiperSlide>
              <Container>
                <div className="content">
                  <p className="km_text">Km</p>
                  <img src={`${dotImg}`} alt="mvn no pollution image" className="golden-icon-no-pollution" />
                  <h4 className="title">{data.title}</h4>
                  <p>{data.desc}</p>
                </div>
              </Container>
            </SwiperSlide>
          ))
        }
      </Swiper>

      
      {/* <span className="abs_number">
        <img
          className="zero_img"
          src={`${CONFIG.IMAGE_URL}micro/location/okm.png`}
          alt="0 km"
        />
      </span> */}
    </section>
{/* 
<CustomCard className="style2" desc="Experience a pollution-free haven at MVN's iconic masterpiece, where every breath you take is purified by advanced air filtration systems. Nestled above MVN mall, everything you need—from gourmet dining to designer boutiques and private cinemas—is just an elevator ride away. This is a sanctuary where luxury and convenience come together, offering you everything at your doorstep, so you never need to leave." /> */}
    </div>
    </>

  );
};

export default NoPolutionZone;
