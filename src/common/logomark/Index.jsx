import React from "react";
import * as CONFIG from '../../config/config'

import './logomark.css'

const Logomark = ({className})=>{
  return(
    <span className={`logomark ${className}`}>
      <img src={CONFIG.IMAGE_URL + 'mvn-aeroone-logo-img.webp'} alt="" />
    </span>
  )
}

export default Logomark;