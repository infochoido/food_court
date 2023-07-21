import React from "react";
import Button from "./button";
import RectangleImage from "../image/Frame 1.png";

const Header = (props) => {
    return(
        <div className="relative w-[100%] h-[135px] flex mx-auto">
            <div className="max-w-[1530px] w-[100%] pl-[30px] pr-[60px] pt-0 m-auto flex">
                <div className="w-[100%] relative inline-block">
                    <img src={RectangleImage} alt="logo"/>
                    <div className="absolute h-[20px] right-[60px] top-5 text-gray-500">name</div>
                    <div className="absolute h-[40px] right-[60px] top-[75px]">
                        <ul className="flex">
                            <li><Button text="menu" /> <p className="inline">|</p></li>
                            <li><Button text="info" /><p className="inline">|</p></li>
                            <li><Button text="event" /></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;
