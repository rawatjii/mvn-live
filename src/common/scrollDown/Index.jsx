import React from "react";

const ScrollDown = ({className})=>{
  return(
    <div id="scroll-wrapper" className={`microsite-scrolldown ${className}`}> 
      <div id="scroll-wrapper-inner ">
        <div id="scroll-title">
          Scroll Down
        </div>
        <div className="scroll-down-dude"></div>
      </div>
    </div>
  )
}

export default ScrollDown;