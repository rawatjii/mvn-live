import React from 'react';
import './Button.css';

interface ButtonProps{
    type: "submit" | "button";
    className?:string;
    onClick?:()=>void;
    disabled?:boolean;
    children:React.ReactNode;
}

const Button:React.FC<ButtonProps> = React.memo((props)=>{
    return(
        <button type={props.type} className={'btn ' + props.className} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    )
})

export default Button