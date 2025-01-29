import React from "react";
import * as CONFIG from '../../../config/config'


const Offer = React.memo(({clickHandler})=>{
  return(
    <div className="offers_section">
      <div className="single" style={{cursor:'pointer'}} onClick={()=>clickHandler(false)}>
        <video src={CONFIG.IMAGE_URL + "offer/offer1.mp4"} muted autoPlay className="img-fluid d-none d-md-block" playsInline />
        <video src={CONFIG.IMAGE_URL + "offer/offer1_sm.mp4"} muted autoPlay className="img-fluid d-md-none" playsInline />
      </div>
    </div>
  )
})

export default Offer;