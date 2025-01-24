import React, { useState, useEffect } from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './gurgaon1-loader.css';
import { useMatches } from "../../../../theme/theme";

const GurgaonLoader1 = () => {
  const { isMobile } = useMatches(); 

  // Set the image URL based on the device type
  const imageUrl = isMobile
    ? `${CONFIG.IMAGE_URL}micro/hero/client/mobile-new/1.webp`
    : `${CONFIG.IMAGE_URL}micro/hero/client/desktop-new/1.webp`;

  return (
    <div className="loader_section gurgaon_loader">
      <img
        src={imageUrl}
        alt="mvn-micro-loader"
        className="img-fluid micro_thumbnail"
      />

      <div className="loaderTxt">
        <BarLoader color="#fff" height={2} width={100} className="bar" />
        <p className="text-white">Loading Experience</p>
      </div>
    </div>
  );
};

export default GurgaonLoader1;
