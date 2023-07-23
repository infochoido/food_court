import React from "react";

const Button = (props) => {
    return(
        <button className="mx-[20px] text-xl font-bold bg-lightBlue p-2 rounded-lg text-beige" onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;