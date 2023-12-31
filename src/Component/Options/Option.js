import { useState,useEffect } from "react";
import CurrentLocation from "./CurrentLocation";
import RangeFood from "./Range";
import Foodjson from "./food";
import Button from "./button_confirm";
import CheckBoxGroup from "./Checkbox";

//options.js가 section에서 최상위 컴포넌트, 여기서 state관리 다 해줌 
//range, checkFood(한식,중식,일식), 현재위치 값을 전부 관리해줌
const Option = () => {
    const [locationData, setLocationData] = useState({});
    const [checkFood, setCheckFood]=useState([]);
    //check된 Food , array data임!!
    const [rangeFood,setRangeFood]=useState(0);
    //RangeFood<- Slider로 변경된 Range값변수!
    const [btnclick, setBtnclick]=useState(false);
    //버튼 클릭해줬을떄 range, check값에 의해 식당리스트를 변경하고 화면에 보여줌 (예정)
    //나중에 useEffect로 바꿔줘야할듯!, 지금은 보여주고, 가리기만나옴

    const handleCheckboxChange = (selectedValues) => {
        setCheckFood(selectedValues);
      };

    useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
    const{latitude,longitude}= position.coords;
    setLocationData({latitude, longitude})
    console.log(position)
    });},[])
        

    const onChange = (e) =>{
        setRangeFood(e.target.value)
    }
    //Range바꾸는거

   
    const onBTN1Click = (e) => {
        e.preventDefault();
        setBtnclick(true);
        console.log(btnclick)
    }

    const onBTN2Click = (e) => {
        e.preventDefault();
        setBtnclick(false);
        console.log(btnclick)
    }
    //BTN확인버튼 제출 
    //Problem : 버튼확인이 단순히 보이고 안보이고만 기능함 , 추가해아할듯 !


    return(
        <div className="w-full">
                <CurrentLocation locationData={locationData}/>
            <div className="p-5 bg-yello200 rounded-2xl">
                <div className="flex p-3 m-3 space-x-10 font-semibold text-m rounded-2xl bg-lightBlue text-beige">
                    <RangeFood index="범위" value={rangeFood} onChange={onChange}/>
                    <CheckBoxGroup value={["한식","일식","중식","양식"]} onChange={handleCheckboxChange}/>
                    <p>Selected: {checkFood.join(", ")}</p>
                </div>
                <Button text="확인" onClick={onBTN1Click}/>
                <Button text="취소" onClick={onBTN2Click}/>
                <Foodjson clicked={btnclick} checkFood={checkFood} locationData={locationData} rangeFood={rangeFood}/>  
            </div>
           
        </div>
    );
}

export default Option;