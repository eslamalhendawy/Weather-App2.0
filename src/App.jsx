import { useState } from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import HeaderButtons from "./components/HeaderButtons";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TempratureAndDetails from "./components/TempratureAndDetails";
import Forecast from "./components/Forecast";

import getFormattedWeatherData from "./services/weatherServices";

import "./App.css";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "cairo" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-auto max-w-screen-md mb-6 px-32 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <HeaderButtons />
        <Inputs />
        <TimeLocation />
        <TempratureAndDetails />
        {/* <Forecast title="Hourly Forecast" />
    <Forecast title="Daily Forecast" /> */}
      </div>
    </div>
  );
}

export default App;
