import React,{useState} from "react";

const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const boxShadowStyle = isHovered
      ? "0 4px 8px rgba(0, 0, 0, 0.2)" // 그림자 효과가 있는 스타일
      : "none"; // 그림자 효과가 없는 스타일
  

    return(
        <button className="w-32 p-2 m-2 text-xl font-bold bg-lightBlue rounded-3xl text-beige" onClick={props.onClick}
        onMouseEnter={handleMouseEnter} // 마우스가 버튼 위에 올라갔을 때 이벤트 핸들러 호출
        onMouseLeave={handleMouseLeave} // 마우스가 버튼 밖으로 나갔을 때 이벤트 핸들러 호출
        style={{ boxShadow: boxShadowStyle }} >{props.text}</button>
    )

}

export default Button;