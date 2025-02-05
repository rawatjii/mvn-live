import React from "react";
import OverviewImg from "../../assets/images/mvn-mall/overview.png";
import MvnLogo from "../../assets/images/mvn-mall/mvn-logo-icon.png";

const OverviewSec = () => {
  return (
    <section className="section overview-section mvn_mall" aria-label="Overview Section">
      <div class="container">
      <div className="overview-image">
        <img className="ovr-img" src={OverviewImg} alt="overview-img" />
        <div className="overview-image-content">
          <img src={MvnLogo} alt="logo" />
          <h4>BIGGER THAN YOUR IMAGINATION</h4>
        </div>
      </div>
      <div className="overview-content">
        <p>
          The mall is designed to be the ultimate destination for both families
          and tourists, offering a vibrant and inviting atmosphere. With the
          airport just a stone's throw away, this destination also has its own
          luxury hotel for tourists visiting from far &amp; wide.
        </p>
        <p>
          There are dedicated floors thoughtfully curated to focus on a specific
          category, such as apparel, furniture, dining, and entertainment,
          ensuring a seamless and well-organized shopping experience.
        </p>
      </div>
      </div>
    </section>
  );
};

export default OverviewSec;
