import React from "react";
import mvnMallLogo from '../../frontend/assets/images/mvn-mall/mvn-mall-logo.webp';
import * as CONFIG from '../../config/config';
import { useLocation } from 'react-router-dom';
import './watermark.css';

const Watermark = ({className, type})=>{
  const location = useLocation();
  
  // Set logo based on the URL path
  let logoSrc = `${CONFIG.IMAGE_URL}default-logo.png`; // default logo
  
  if (location.pathname === '/mvn-athens-faridabad' || location.pathname === '/mvn-athens-gurgaon-phase-2' || location.pathname === '/mvn-athens-gurgaon-phase-1') {
    logoSrc = `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}athens-logo.png`;
  }else if(location.pathname.includes('mvn-mall')){
    logoSrc = mvnMallLogo;
  } else {
    logoSrc = `${CONFIG.IMAGE_URL}logo.png`;
  }

  switch(type){
    case 'style1':
      return <small className={`watermark ${className}`}>Artistic Impression</small>

    default:
      return(
        <div className={`WaterMarkContainer ${className}`}>
        <div className="Watermark_artistic">Artistic Impression</div>
        
        <div className="Watermark_logo"><img src={logoSrc} alt="logo" /></div>
    
        </div>
      )
  }

}

export default Watermark;