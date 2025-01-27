import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as CONFIG from 'root/config/config'

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
            src={isMobile ? CONFIG.IMAGE_URL + 'homepage/hero/hero_img_sm.webp' : CONFIG.IMAGE_URL + 'homepage/hero/hero_img.webp'}
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