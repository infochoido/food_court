import { useState } from "react";

function Range({name}) {
    const[value, setValue] = useState(0);
    const onChange=(e)=>{
        setValue(e.target.value);
    }
    return (
      <label>
        {name}
        <input
          type="range"
          name={name}
          onChange={onChange}
          min="0"
          max="10"
          step="1"
        />
        <p>{value}km</p>
      </label>
    );
  }

  export default Range;