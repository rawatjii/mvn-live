import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../config/config";

const Banner1 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <section className="banner1" aria-label="Banner Section">
      <img
        src={
          isMobile
            ? `${API_URL}images/hero/strip-banner-mobile.webp`
            : `${API_URL}images/hero/strip-banner.webp`
        }
        alt="Hero Banner"
        className="img-fluid degree-img"
        loading="lazy"
      />
      <Link
        to={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
        className="btn btn_style3 r_100 d-table mx-auto mt_20 mb_60"
      >
        Click Here
      </Link>
    </section>
  );
};

export default Banner1;
