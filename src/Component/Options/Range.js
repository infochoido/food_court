const RangeFood=(props)=>{
    const handleOnChange = (event) => {
        // slider 값이 변경될 때마다, 부모 컴포넌트로 선택된 값을 전달
        props.onChange(event);
      };
 return(
    <div>
        <index>{props.index}</index>
        <input type="range" name="FoodRange" value={props.value} onChange={handleOnChange} min={0} max={10} step={0.1}/>
        <p>{props.value} km</p>
    </div>
 );
}

export default RangeFood;