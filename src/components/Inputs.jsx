import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({setQuery, units, setUnits}) {

  const [city, setCity] = useState("");

  const handleSearch = () => {
    if(city != "") {
      setQuery({q: city});
      setCity("");
    }
  }

  const handleLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({lat, lon})
      })
    }
  }

  return (
    <div className="flex justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input type="text" className="sm:text-xl text-sm font-light p-2 focus:outline-none w-full shadow-xl capitalize focus:placeholder:opacity-0 placeholder:duration-300" placeholder="Search for city..." value={city} onChange={(e) => setCity(e.target.value)} />
        <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125" size={25} onClick={handleSearch} />
        <UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125" size={25} onClick={handleLocation} />
      </div>
      <div className="flex w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-110" onClick={() => setUnits("metric")}>°C</button>
        <p className="text-white text-xl mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-110" onClick={() => setUnits("imperial")}>°F</button>
      </div>
    </div>
  );
}

export default Inputs;
