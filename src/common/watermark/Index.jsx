import React, { useEffect, useState } from "react";

import * as CONFIG from '../../config/config';
import { useLocation } from 'react-router-dom';
import './watermark.css';

const mvnMallLogo = `${CONFIG.API_URL}images/mvn-mall/mvn-mall-logo.webp`;
const athensFaridabadLogo = `${CONFIG.API_URL}images/athens-faridabad/athens-logo.png`;

const Watermark = ({className, type, isMvnLogo, customClass})=>{
  const [isAeroGurgaon, setIsAeroGurgaon] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null)
  const location = useLocation();
  
  // Set logo based on the URL path
  // let logoSrc = `${CONFIG.IMAGE_URL}default-logo.png`; // default logo
  
  useEffect(()=>{
    if (location.pathname === '/mvn-athens-faridabad' || location.pathname === '/mvn-athens-gurgaon-phase-2' || location.pathname === '/mvn-athens-gurgaon-phase-1' || location.pathname === '/mvn-athens-gurgaon-phase-3') {
      setLogoUrl(athensFaridabadLogo);
    }else if(location.pathname.includes('mvn-mall')){
      setLogoUrl(mvnMallLogo);
    } else {
      setLogoUrl(`${CONFIG.API_URL}assets/mvn-aeroone-logo-img.webp`);
      setIsAeroGurgaon(true)
    }
  }, [location])

  switch(type){
    case 'style1':
      return <small className={`watermark ${className}`}>Artistic Impression</small>

    default:
      return(
        <div className={`WaterMarkContainer ${customClass}`}>
        <div className="Watermark_artistic">Artistic Impression</div>

        {isMvnLogo ? (
          <div className={`Watermark_logo ${isAeroGurgaon ? 'aeroGurgaon_logo' : null}`}><img src={`${CONFIG.API_URL}assets/mvn_mall.webp`} alt="logo image" /></div>
        ) : (
          <div className={`Watermark_logo ${isAeroGurgaon ? 'aeroGurgaon_logo' : null}`}><img src={logoUrl} alt="logo image" /></div>
        )}
        
        
    
        </div>
      )
  }

}

export default Watermark;