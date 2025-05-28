import React from "react";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";

const Offer = React.memo(({clickHandler, data})=>{

  const {image, alternative_image} = data;

  return(
    <section className="section offers_section">
      <div className="single" role="presentation" style={{cursor:'pointer'}} onClick={()=>clickHandler(false)}>
        <video src={`${BACKEND_IMAGE_URL + image}`} muted className="img-fluid d-none d-md-block" playsInline autoPlay preload="auto" loop={false} loading="lazy" />
        <video src={`${BACKEND_IMAGE_URL + alternative_image}`} muted className="img-fluid d-md-none" playsInline autoPlay preload="auto" loop={false} loading="lazy" />
      </div>
    </section>
  )
})

export default Offer;