import { useState,useEffect } from "react";
import CurrentLocation from "./CurrentLocation";
import RangeFood from "./Range";
import Foodjson from "./food";
import Button from "./button_confirm";

//options.js가 section에서 최상위 컴포넌트, 여기서 state관리 다 해줌 
//range, checkFood(한식,중식,일식), 현재위치 값을 전부 관리해줌
const Option = () => {
    const [locationData, setLocationData] = useState({});
    const [checkFood, setCheckFood]=useState([]);
    const [rangeFood,setRangeFood]=useState(0);
    //RangeFood<- Slider로 변경된 Range값변수!
    const [btnclick, setBtnclick]=useState(false);
    //버튼 클릭해줬을떄 range, check값에 의해 식당리스트를 변경하고 화면에 보여줌 (예정)
    //나중에 useEffect로 바꿔줘야할듯!, 지금은 보여주고, 가리기만나옴

    useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
    const{latitude,longitude}= position.coords;
    setLocationData({latitude, longitude})
    console.log(position)
    });},[])
        

    const onChange = (e) =>{
        setRangeFood(e.target.value)
    }

   
    const onBTNClick = (e) => {
        e.preventDefault();
        setBtnclick((prev)=>!prev);
        console.log(btnclick)
    }


    return(
        <div>
            <CurrentLocation locationData={locationData}/>
            <RangeFood index="범위" value={rangeFood} onChange={onChange}/>
            <Button text="확인" onClick={onBTNClick}/>
            <Foodjson clicked={btnclick}/>
        </div>
    );
}

export default Option;