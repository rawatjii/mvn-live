import React from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './living_room_loader.css';

const LivingRoomVideoLoader = ()=>{
  return(
    <div className="loader_section gurgaon_loader living_room_video_loader">
      <div className="position-relative">
        <img src={CONFIG.VIDEO_URL + 'living-room/loader_thumbnail.webp'} alt="mvn micro loader" className="img-fluid micro_thumbnail" />

        <div className="loaderTxt">
          <BarLoader
            color="#fff"
            height={2}
            width={100}
            className="bar" 
          />
          <p style={{color:'#fff'}}>Loading Experience</p>
        </div>
      </div>
      
    </div>
  )
}

export default LivingRoomVideoLoader;