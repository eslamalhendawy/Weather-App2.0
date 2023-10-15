import { useState } from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import HeaderButtons from "./components/HeaderButtons";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";

import "./App.css";

function App() {
  return <div className="mx-auto max-w-screen-md mt-4 px-32 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <HeaderButtons />
    <Inputs />
    <TimeLocation />
  </div>;
}

export default App;
 