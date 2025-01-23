import React, { useEffect, useRef, useState } from 'react';
import './CustomDropdown.css'

const CustomDropdown = (props)=>{
    const options=props.options;
    const onSelect=props.onSelect;
    const className=props.className;
    const defaultVal=props.defaultVal;

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        onSelect(selectedValue, event);
    };
    
    return(
        <>
            <select className={className} defaultValue={defaultVal} name='optionName' onChange={handleSelect}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                    {option.label}
                    </option>
                ))}
            </select>

        </>
    )
}

export default CustomDropdown;