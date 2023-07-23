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

    const filterRestaurant = () => {
      return restaurant.filter((data) => props.checkFood.includes(data.BIZ_CRTFCT_BZSTAT_NM));
    };


    return (
      <div className="flex">
        {props.clicked ? (
          loading ? (
            <p>loading</p>
          ) : (
            <ul>
              {filterRestaurant().map((data, index) => (
                <li key={index} className="text-xl">{data.RSTR_NM}</li>
              ))}
            </ul>
          )
        ) : null}
      </div>
    );
    
}

export default Foodjson;