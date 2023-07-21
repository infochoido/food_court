import { useState} from "react"

const Location=()=>{
    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongigude] = useState([]);
    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongigude(position.coords.longitude)
        console.log(position)
    });

    return(
        <div>
            <p className="text-xl">Current Location is {latitude} / {longitude}</p>
        </div>
    )
}

export default Location;