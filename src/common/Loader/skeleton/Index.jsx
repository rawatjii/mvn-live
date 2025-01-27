import React from "react";
import './skeleton.css'

const Skeleton = ({height})=>{
  return(
    <div className={`skeleton_box ${height}`}></div>
  )
}

export default Skeleton;