import React from "react";
import './watermark.css'

const Watermark = ({className})=>{
  return(
    <small className={`watermark ${className}`}>Artistic Impression</small>
  )
}

export default Watermark;