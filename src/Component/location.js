import {useEffect} from "react"

const Location=({setLocationData})=>{
    useEffect(()=>{ navigator.geolocation.getCurrentPosition((position) => {
        const{latitude,longitude}= position.coords;
        setLocationData({latitude, longitude})
        console.log(position)
    });},[setLocationData])
   

    return(
        <div>
        </div>
    )
}

export default Location;