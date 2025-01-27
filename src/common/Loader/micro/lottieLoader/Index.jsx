import React, { useEffect, useState } from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './lottie_loader.css';
import { useMatches } from "../../../../theme/theme";

const LottieAnimationLoader = ()=>{
  const { isMobile } = useMatches(); 

  return(
    <div className="loader_section gurgaon_loader party_loader">
      <div className="position-relative">
        {isMobile ? (
          <img src={CONFIG.VIDEO_URL + 'party/mobile/1.webp'} alt="loader image" className="img-fluid micro_thumbnail" />
        ) : (
          <img src={CONFIG.VIDEO_URL + 'party/desktop/1.webp'} alt="loader image" className="img-fluid micro_thumbnail" />
        )}
        

        <div className="loaderTxt">
          <BarLoader
            color="#fff"
            height={2}
            width={100}
            className="bar" 
          />
          <p style={{color:'#fff'}}>Loading Experience</p>
        </div>
      </div>
    </div>
  )
}

export default LottieAnimationLoader;