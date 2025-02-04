import React, { useEffect, useState } from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './peacock_loader.css';

const PartyLoader = ()=>{
  const [isMobile, setIsMobile] = useState(null);

  useEffect(()=>{
    if(window.innerWidth < 767){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  }, [])

  return(
    <div className="loader_section gurgaon_loader party_loader">
      <div className="position-relative">
        {isMobile ? (
          <img src={CONFIG.VIDEO_URL + 'party/mobile/1.webp'} alt="mvn micro loader" className="img-fluid micro_thumbnail" />
        ) : (
          <img src={CONFIG.VIDEO_URL + 'party/desktop/1.webp'} alt="mvn micro loader" className="img-fluid micro_thumbnail" />
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

export default PartyLoader;