import React from "react";
import * as CONFIG from '../../config/config'

import './logomark.css'

const Logomark = React.memo(({className})=>{
  return(
    <span className={`logomark ${className}`}>
      <img src={CONFIG.IMAGE_URL + 'mvn-aeroone-logo-img.webp'} alt="mvn aeroone logo" />
    </span>
  )
})

export default Logomark;