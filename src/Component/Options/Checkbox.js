import { useState, useEffect } from "react";

const CheckBoxGroup=(props)=>{
    
    const [selectedValues, setSelectedValues] = useState([]);
    
    const handleCheckboxChange = (e, item) => {
        if (e.target.checked) {
          setSelectedValues((prev) => [...prev, item]);
        } else {
          setSelectedValues((prev) => prev.filter((value) => value !== item));

        }
        props.onChange(selectedValues);
      };

    useEffect(()=>{props.onChange(selectedValues)},[selectedValues]);
    
    return(
        <div className="flex space-x-3">
            <div>
                <label>{props.value[0]}</label>
                <input type="checkbox" onChange={(e)=> handleCheckboxChange(e,props.value[0])}/>
            </div>
            <div>
                <label>{props.value[1]}</label>
                <input type="checkbox" onChange={(e)=> handleCheckboxChange(e,props.value[1])}/>
            </div>
            <div>
                <label>{props.value[2]}</label>
                <input type="checkbox" onChange={(e)=> handleCheckboxChange(e,props.value[2])}/>
            </div>
            <div>
                <label>{props.value[3]}</label>
                <input type="checkbox" onChange={(e)=> handleCheckboxChange(e,props.value[3])}/>
            </div>
        </div>
        
    )
}


export default CheckBoxGroup;