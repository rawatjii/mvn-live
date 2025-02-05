import React, {useState} from "react";
import './customSwitch.css';


const CustomSwitch = ({ id, toggleSwitch, isChecked })=>{
    return(
        <>
            {/* checked={isChecked ? isChecked == id : false} */}
            <input  className="grayBorder" type="checkbox" id={id} hidden onChange={toggleSwitch} checked={isChecked == 1 ? true : false} />
            <label htmlFor={id} className={`customSwitch`}>
                <div className="slider"></div>
            </label>
        </>
    )
}

export default CustomSwitch;