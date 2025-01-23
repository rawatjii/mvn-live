import React from "react";
import * as CONFIG from '../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './gurgaon-loader.css';

const HomePageloader = ({mobile})=>{
  return(
    <div className="loader_section gurgaon_loader">
      {
        mobile 
          ? <img src={CONFIG.IMAGE_URL + 'micro/hero/mobile/1.webp'} alt="mvn-micro-loader" className="img-fluid micro_thumbnail" />
          : <img src={CONFIG.IMAGE_URL + 'micro/hero/desktop/1.webp'} alt="mvn-micro-loader" className="img-fluid micro_thumbnail" />
      }
      <div className="loaderTxt">
        <BarLoader
          color="#fff"
          height={2}
          width={100}
          className="bar" 
        />
        <p className="text-white">Loading Experience</p>
      </div>
    </div>
  )
}

export default HomePageloader;