import React from "react";

const Button = (props) => {
    return(
        <button className="mx-[20px] text-xl font-bold" onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;