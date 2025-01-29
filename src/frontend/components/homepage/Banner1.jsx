import React, { useState } from "react";

import DeskopheronormalImg2 from "../../../frontend/assets/images/hero/strip-banner.webp";
import MobileheronormalImg2 from "../../../frontend/assets/images/hero/strip-banner-mobile.webp";

const Banner1 = ()=>{
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return(
    <section className="banner1">
      <a
        href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
        className="hero-banner-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={isMobile ? MobileheronormalImg2 : DeskopheronormalImg2}
          alt="Hero Banner"
          className="img-fluid degree-img"
          
        />
      </a>
    </section>
  )
}

export default Banner1;