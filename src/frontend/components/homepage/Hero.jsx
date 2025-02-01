import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from '../../assets/images/homepage/hero/hero_img.webp';
import heroImgSm from '../../assets/images/homepage/hero/hero_img_sm.webp';

const Hero = ()=>{
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return(
    <>
      <div className="parent-box-div">
        <a
          href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
          className="hero-banner-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isMobile ? heroImgSm : heroImg}
            alt="Hero Banner"
            className="img-fluid hero-banner"
          />
        </a>

        <div className="slider-content">
          <h1 className="slider-heading">Enter The Experience Center</h1>
          <div className="btns">
            <Link
              to={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
              className="btn ink-btn btn_style3 r_100"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;