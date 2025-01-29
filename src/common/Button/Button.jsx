import React from 'react';
import './Button.css'

const Button = React.memo((props)=>{
    return(
        <button type="button" className={'btn ' + props.className} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    )
})

export default Button