import React from "react";
import { API_URL } from "../../../config/config";

const Offer = React.memo(({clickHandler})=>{
  return(
    <div className="offers_section">
      <div className="single" role="presentation" style={{cursor:'pointer'}} onClick={()=>clickHandler(false)}>
        <video src={`${API_URL}images/homepage/offer/offer1.mp4`} muted className="img-fluid d-none d-md-block" playsInline autoPlay preload="auto" loop={false} loading="lazy" />
        <video src={`${API_URL}images/homepage/offer/offer1_sm.mp4`} muted className="img-fluid d-md-none" playsInline autoPlay preload="auto" loop={false} loading="lazy" />
      </div>
    </div>
  )
})

export default Offer;