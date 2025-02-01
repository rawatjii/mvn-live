import React from "react";
import offer1 from '../../assets/images/homepage/offer/offer1.mp4';
import offer1_sm from '../../assets/images/homepage/offer/offer1_sm.mp4';

const Offer = React.memo(({clickHandler})=>{
  return(
    <div className="offers_section">
      <div className="single" style={{cursor:'pointer'}} onClick={()=>clickHandler(false)}>
        <video src={offer1} muted autoPlay className="img-fluid d-none d-md-block" playsInline />
        <video src={offer1_sm} muted autoPlay className="img-fluid d-md-none" playsInline />
      </div>
    </div>
  )
})

export default Offer;