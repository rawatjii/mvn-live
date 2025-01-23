import React from "react"
import PropTypes from 'prop-types'; 
import './customRadio.css'

const CustomRadio = (props)=>{
    return(
        <>
            <div className={`${props.className}`}>
                <input type="radio" name={props.name} id={props.id} {...props} hidden />
                <label className="custom_radio" htmlFor={props.id}>
                    {props.label}
                </label>
            </div>
        </>
    )
}   

export const CustomRadio1 = (props)=>{
    return(
        <>
            <div className={`${props.className}`}>
                <input type="checkbox" name={props.name} id={props.label} {...props} hidden />
                <label className="custom_radio" htmlFor={props.label}>
                    <span className="icon"></span>
                    {props.label}
                </label>
            </div>
        </>
    )
}  

CustomRadio.propTypes={
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}

export default CustomRadio