import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import HeaderButtons from "./components/HeaderButtons";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TempratureAndDetails from "./components/TempratureAndDetails";

import getFormattedWeatherData from "./services/weatherServices";

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "cairo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";
      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);
      }).catch((e) => {
        toast.error("City not found");
        console.log(e);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if(!weather) {
      return "from-cyan-700 to-blue-700";
    }
    const threshold = units === "metric" ? 20 : 68;
    if(weather.temp <= threshold) {
      return "from-cyan-700 to-blue-700";
    }else {
      return "from-yellow-700 to-orange-700";
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#E6F4F1]">
      <div className={`mx-auto max-w-screen-md md:px-32 sm:px-16 px-4 py-5 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <HeaderButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
        {weather && (
          <>
            <TimeLocation weather={weather}/>
            <TempratureAndDetails weather={weather} />
          </>
        )}
        {/* <Forecast title="Hourly Forecast" />
    <Forecast title="Daily Forecast" /> */}
      </div>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
