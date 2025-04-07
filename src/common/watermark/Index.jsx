import React, { useEffect, useState } from "react";
import mvnMallLogo from '../../frontend/assets/images/mvn-mall/mvn-mall-logo.webp';
import athensFaridabadLogo from '../../frontend/assets/images/athens-faridabad/athens-logo.png';

import * as CONFIG from '../../config/config';
import { useLocation } from 'react-router-dom';
import './watermark.css';

const Watermark = ({className, type, isMvnLogo, customClass})=>{
  const [isAeroGurgaon, setIsAeroGurgaon] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null)
  const location = useLocation();
  
  // Set logo based on the URL path
  // let logoSrc = `${CONFIG.IMAGE_URL}default-logo.png`; // default logo
  
  useEffect(()=>{
    if (location.pathname === '/mvn-athens-faridabad' || location.pathname === '/mvn-athens-gurgaon-phase-2' || location.pathname === '/mvn-athens-gurgaon-phase-1') {
      setLogoUrl(athensFaridabadLogo);
    }else if(location.pathname.includes('mvn-mall')){
      setLogoUrl(mvnMallLogo);
    } else {
      setLogoUrl(`${CONFIG.IMAGE_URL}mvn-aeroone-logo-img.webp`);
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
          <div className={`Watermark_logo ${isAeroGurgaon ? 'aeroGurgaon_logo' : null}`}><img src={`${CONFIG.IMAGE_URL}mvn_mall.webp`} alt="logo image" /></div>
        ) : (
          <div className={`Watermark_logo ${isAeroGurgaon ? 'aeroGurgaon_logo' : null}`}><img src={logoUrl} alt="logo image" /></div>
        )}
        
        
    
        </div>
      )
  }

}

export default Watermark;