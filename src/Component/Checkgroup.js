import CheckFood from "./option";
import { useState,useEffect } from "react";

function Checkgroup({ label}) {
  const categoryList = [
    { name: '한식' },
    { name: '중식' },
    { name: '일식' },
  ];
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  useEffect(()=>{
  },[selectedValues]);
  
    return (
    <div>
      {label}
      <ul className="flex space-x-3">
       {categoryList.map((item,index) => (
        <li key={index}>
           <CheckFood value={item.name} 
              onChange={() => handleCheckboxChange(item.name)}
              checked={selectedValues.includes(item.name)}/>
        </li>
       ))}
      </ul>
      <p>Selected values: {selectedValues.join(", ")}</p>
    </div>
    );
    
     
  } 

  export default Checkgroup;