import React, { useState } from "react";

import DeskopheronormalImg2 from "../../../frontend/assets/images/hero/strip-banner.webp";
import MobileheronormalImg2 from "../../../frontend/assets/images/hero/strip-banner-mobile.webp";
import { Link } from "react-router-dom";

const Banner1 = ()=>{
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return(
    <section className="banner1 custom_cursor_section click_here">
        <img
          src={isMobile ? MobileheronormalImg2 : DeskopheronormalImg2}
          alt="Hero Banner"
          className="img-fluid degree-img"
          
        />
        <Link
            to={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
            className="btn btn_style3 r_100 d-table mx-auto mt_20 mb_60"
          >
            Click Here
          </Link>
    </section>
  )
}

export default Banner1;