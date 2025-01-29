import React from "react";
import './watermark.css'

const Watermark = React.memo(({className})=>{
  return(
    <small className={`watermark ${className}`}>Artistic Impression</small>
  )
})

export default Watermark;