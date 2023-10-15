import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className="flex justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input type="text" className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize focus:placeholder:opacity-0 placeholder:duration-300" placeholder="Search for city..." />
        <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125" size={25} />
        <UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125" size={25} />
      </div>
      <div className="flex w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-110">°C</button>
        <p className="text-white text-xl mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-110">°F</button>
      </div>
    </div>
  );
}

export default Inputs;
