import React, { forwardRef } from "react";

import './image.css'

const AnImage = forwardRef(({className, height, children}, ref)=>{
  return(
    <div ref={ref} className={`an_img ${className}`} style={height ? {height:'100%'} : null}>
      {children}
    </div>
  )
});

export default AnImage;