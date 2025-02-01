import React from "react";
import * as CONFIG from '../../config/config'

import './logomark.css'

const Logomark = ({ className, logo }) => {
  return (
    <span className={`logomark ${className}`}>
      {logo && logo == 'mvn' ? <img src={CONFIG.IMAGE_URL + 'watermark/mvn_mall.webp'} alt="mvn aeroone logo" /> : <img src={CONFIG.IMAGE_URL + 'mvn-aeroone-logo-img.webp'} alt="mvn aeroone logo" />}

    </span>
  )
}

export default Logomark;