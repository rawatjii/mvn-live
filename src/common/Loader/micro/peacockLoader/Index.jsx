import React, { useEffect, useState } from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import classes from './peacock_loader.module.css';

const PeacockLoader = ()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    updateIsMobile(); // Set initial value
    window.addEventListener("resize", updateIsMobile); // Update on resize

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };

  }, [])

  return(
    <div className={`loader_section gurgaon_loader ${classes.peacock_loader}`}>
      <div className="position-relative">
        <img src={`${CONFIG.IMAGE_URL}${isMobile ? 'peacock/mobile/1.webp' : 'peacock/peacock.webp'}`} alt="mvn-micro-loader" className="img-fluid micro_thumbnail" />

        <div className="loaderTxt">
          <BarLoader
            color="#8b5e10"
            height={2}
            width={100}
            className="bar" 
          />
          <p>Loading Experience</p>
        </div>
          
      </div>  
    </div>
  )
}

export default PeacockLoader;