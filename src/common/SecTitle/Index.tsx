import React from "react";

interface SecTitleProps{
  className: string;
  children: React.ReactNode;
}

const SecTitle:React.FC<SecTitleProps> = ({children, className})=>{
  return(
    <div className={'sec_title ' + className}>
      {children}
    </div>
  )
}

export default SecTitle;