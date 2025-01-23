import React, {useState} from "react";
import './customSwitch.css';


const CustomSwitch = ({ id, toggleSwitch, isChecked })=>{

    // State variable to track the switch state
    // const [isChecked, setIsChecked] = useState(initialState || false);

    // Function to handle switch toggle
    // const toggleSwitch = (e) => {
    //     setIsChecked(prevState => !prevState);
    // };
    
    return(
        <>
            {/* checked={isChecked ? isChecked == id : false} */}
            <input type="checkbox" id={id} hidden onChange={toggleSwitch} checked={isChecked == 1 ? true : false} />
            <label htmlFor={id} className={`customSwitch`}>
                <div className="slider"></div>
            </label>
        </>
    )
}

export default CustomSwitch;