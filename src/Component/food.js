import {useState,useEffect} from "react";


function Foodjson(){
    const key ="JwPU83tpvKVndt5xkGNo8AxxmugFjsYYGv3IY8YSrk2HiZumkbPQMxiemXMXXe5P" 
    const [loading, setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState([]);
    const getrestaurant = async()=>{
        setTimeout(async()=>{
        const response = await fetch(`https://jeonnam.openapi.redtable.global/api/rstr/korean?serviceKey=${key}&pageNo=1`);
        const json = await response.json();
        setRestaurant(json.body);
        setLoading(false);
        console.log(response)
          },1000)};

    useEffect(() =>{
        getrestaurant();
        }
    ,[]);

    return(
        <div className="flex justify-center flex-wrap">
            {loading ? (
                    <p>loading</p>
                ) : 
                <ul>
                {restaurant.map((data, index) => (
                  <li key={index}>{data.RSTR_NM}</li>
                ))}
              </ul>
            } 
        </div>
    );
}

export default Foodjson;