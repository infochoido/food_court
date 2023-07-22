const CurrentLocation=({locationData})=>{
    const {latitude, longitude} = locationData;
    return(
        <div>
            <p>Current Position is {latitude}/{longitude}</p>
        </div>
    )
}

export default CurrentLocation;