import {useState,useEffect} from "react";


function Foodjson(props){
    const key ="JwPU83tpvKVndt5xkGNo8AxxmugFjsYYGv3IY8YSrk2HiZumkbPQMxiemXMXXe5P" 
    const [loading, setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState([]);
   
    
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

    const filterRestaurant = (category) => {
      return restaurant.filter((data) => data.BIZ_CRTFCT_BZSTAT_NM=== category);
    };


    return (
      <div className="flex">
        {props.clicked ? (
          loading ? (
            <p>loading</p>
          ) : (
            <ul>
              {filterRestaurant("일식").map((data, index) => (
                <li key={index}>{data.RSTR_NM}</li>
              ))}
            </ul>
          )
        ) : null}
      </div>
    );
    
}

export default Foodjson;