import React from 'react';
import './Button.css'

const Button = React.memo((props)=>{
    return(
        <button type={props.type} className={'btn ' + props.className} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    )
})

export default Button