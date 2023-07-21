import React from "react";

const Button = (props) => {
    return(
        <button className="mx-[20px] text-xl font-bold">{props.text}</button>
    )
}

export default Button;