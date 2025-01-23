import React from "react";
import ReactDom from 'react-dom';

const BackdropPortal = ({className})=>{
    return ReactDom.createPortal(
        <div className={`backdrop ${className ? className : ''}`}></div>,
        document.getElementById('backdrop_root')
    )
}

export default BackdropPortal