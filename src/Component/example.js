import Location from "./location";
import React, { useState } from "react";

const CurrentLocation = () => {
  const [locationData, setLocationData] = useState(null);

  return (
    <div>
      <Location setLocationData={setLocationData} />
      {locationData && (
        <p className="text-xl">
          Current Location is {locationData.latitude} / {locationData.longitude}
        </p>
      )}
    </div>
  );
};

export default CurrentLocation;