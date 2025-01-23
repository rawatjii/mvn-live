import React from "react";

const SecTitle = ({children, className})=>{
  return(
    <div className={'sec_title ' + className}>
      {children}
    </div>
  )
}

export default SecTitle;