import React from "react";
import "./initialLoading.css";

const InitialLoading = ({loadingImg}) => {
    return (
        <div className="initial_loading">
            <img src={loadingImg.desktop} alt="loader desktop image" className="img-fluid loading_img d_sm_none" style={{width:'100%'}} />
            <img src={loadingImg.mobile} alt="loader desktop image" className="img-fluid loading_img d_none d_sm_block" style={{width:'100%'}} />
        </div>
    );
};

export default InitialLoading;
