import React, { forwardRef } from "react";

import './image.css'

interface AnImageProps{
  className: string;
  height?: string;
  children: React.ReactNode;  // any component that accepts children prop
}

const AnImage = forwardRef<HTMLDivElement, AnImageProps>(({className, height, children}, ref)=>{
  return(
    <div ref={ref} className={`an_img ${className}`} style={height ? {height:'100%'} : undefined}>
      {children}
    </div>
  )
});

export default AnImage;