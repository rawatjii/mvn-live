import React from "react";
import { API_URL, BACKEND_IMAGE_URL } from "../../../config/config";

const Offer = React.memo(({clickHandler, data})=>{

  const {image, alternative_image} = data;

  return(
    <section className="section offers_section">
      <div className="single" role="presentation" style={{cursor:'pointer'}} onClick={()=>clickHandler(false)}>
        <video src={window.innerWidth < 768 ? `${BACKEND_IMAGE_URL + alternative_image}` : `${BACKEND_IMAGE_URL + image}`} muted className="img-fluid " playsInline autoPlay preload="none" loop={false} loading="lazy" />
      </div>
    </section>
  )
})

export default Offer;