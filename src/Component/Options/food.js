import React,{useState,useEffect} from "react";

//data.RSTR_LAT : 위도변수 , data.RSTR_LOT : 경도변수
//latitude, longitude : 현재위치 변수
//props.rangeFood : 현재 범위 변수


function Foodjson(props){
    const key ="JwPU83tpvKVndt5xkGNo8AxxmugFjsYYGv3IY8YSrk2HiZumkbPQMxiemXMXXe5P" 
    const [loading, setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState([]);
    const {latitude, longitude} = props.locationData;
   
    
    const getrestaurant = async()=>{
        const response = await fetch(`https://jeonnam.openapi.redtable.global/api/rstr/korean?serviceKey=${key}&pageNo=1`);
        const json = await response.json();
        setRestaurant(json.body);
        setLoading(false);
        };

    useEffect(() =>{
        getrestaurant();
        }
    ,[props.clicked]);

    const filterRestaurant = () => {
      return restaurant.filter((data) => props.checkFood.includes(data.BIZ_CRTFCT_BZSTAT_NM));
    };
//이건 한식,일식,중식,양식으로 filtering하는 부분 

    return (
      <div>
        <p> 현재위도: {latitude}</p>
        <p> 현재경도: {longitude}</p>
        <p> 현재범위 : {props.rangeFood} </p>
        {props.clicked ? (
          loading ? (
            <p>loading</p>
          ) : (
            <ul>
                
              {filterRestaurant().map((data) => (
                <div key={data.RSTR_ID} className="flex space-x-3">
                  <li className="text-xl">{data.RSTR_NM}</li>
                  <li> 위도: {data.RSTR_LAT} </li>
                  <li> 경도: {data.RSTR_LOT} </li>
                </div>
                
              ))}
            </ul>
          )
        ) : null}
      </div>
    );
    
}

export default Foodjson;