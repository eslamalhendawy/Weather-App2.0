import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind } from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../services/weatherServices";

function TempratureAndDetails({weather: {details, temp, icon, feels_like, humidity, speed, temp_max, temp_min}}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 sm:text-xl text--base text-white">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center sm:justify-between justify-evenly text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="sm:w-20 w-16" />
        <p className="sm:text-5xl text-3xl">{temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light sm:text-sm text-xs items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real Feel:
            <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
          </div>
          <div className="flex font-light sm:text-sm text-xs items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity.toFixed()}%</span>
          </div>
          <div className="flex font-light sm:text-sm text-xs items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row item-center justify-center text-white space-x-2 text-sm py-3">
        {/* <p className="font-light ">Rise: <span className="font-medium ml-1 ">{formatToLocalTime(sunrise, "hh:mm a")}</span></p>
        <p className="font-light">|</p>
        <UilSunset  />
        <p className="font-light ">Set: <span className="font-medium ml-1 ">{formatToLocalTime(sunset, "hh:mm a")}</span></p>
        <p className="font-light">|</p> */}
        <UilArrowUp  />
        <p className="font-light ">High: <span className="font-medium ml-1 ">{temp_max.toFixed()}°</span></p>
        <p className="font-light">|</p>
        <UilArrowDown  />
        <p className="font-light ">Low: <span className="font-medium ml-1 ">{temp_min.toFixed()}°</span></p>
      </div>
    </div>
  );
}

export default TempratureAndDetails;
