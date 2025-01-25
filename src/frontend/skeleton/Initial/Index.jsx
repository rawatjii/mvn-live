import React from "react";
import "./initialLoading.css";

const InitialLoading = ({loadingImg}) => {
    return (
        <div className="initial_loading">
            <img src={loadingImg.desktop} alt="loader-desktop-image" className="img-fluid loading_img d_sm_none" />
            <img src={loadingImg.mobile} alt="loader-desktop-image" className="img-fluid loading_img d_none d_sm_block" />
        </div>
    );
};

export default InitialLoading;
