import React from "react";
import bannerMob from "../../assets/images/mvn-mall/banner-mob.webp";
import mallLogo from "../../assets/images/mvn-mall/mvn-mall-logo.webp";

const Banner = () => {
  return (
    <>
      <section className="banner-section" aria-label="Banner Section">
        <div className="banner-img">
          <img
            className="img-fluid mobile-img"
            src={bannerMob}
            alt="banner-mob"
          />
          <div className="banner-content">
            <img className="mvn-mall-logo" src={mallLogo} alt="logo" />
            <p>First And Only Drop Of The 22 Kms. Elevated Dwarka Expressway</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
