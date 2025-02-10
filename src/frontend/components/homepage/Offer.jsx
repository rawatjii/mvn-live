import React from "react";
import * as CONFIG from '../../../config/config'


const Offer = React.memo(({clickHandler})=>{
  return(
    <div className="offers_section">
      <div className="single" role="presentation" aria-label="Play offer video" style={{cursor:'pointer'}} onClick={()=>clickHandler(false)}>
        <video src={CONFIG.IMAGE_URL + "offer/offer1.mp4"} muted  aria-label="Play offer video promotion" className="img-fluid d-none d-md-block" playsInline autoPlay loop />
        <video src={CONFIG.IMAGE_URL + "offer/offer1_sm.mp4"} muted  aria-label="Play offer video promotion mobile version" className="img-fluid d-md-none" playsInline autoPlay loop />
      </div>
    </div>
  )
})

export default Offer;