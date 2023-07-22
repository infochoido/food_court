import { useState,useEffect } from "react";
import CurrentLocation from "./CurrentLocation";
import RangeFood from "./Range";
import Foodjson from "./food";
import Button from "./button_confirm";


const Option = () => {
    const [locationData, setLocationData] = useState({});
    const [checkFood, setCheckFood]=useState([]);
    const [rangeFood,setRangeFood]=useState(0);
    //RangeFood<- Slider로 변경된 Range값변수!
    const [btnclick, setBtnclick]=useState(false);

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