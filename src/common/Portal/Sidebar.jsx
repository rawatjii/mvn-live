import React from "react";
import ReactDom from 'react-dom';

const SidebarPortal = ({children, className})=>{
    return ReactDom.createPortal(
        <div className={className}>
            {children}
        </div>, 
        document.getElementById('sidebar_root')
    )
}

export default SidebarPortal;