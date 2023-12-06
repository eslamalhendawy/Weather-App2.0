import React from "react";

function HeaderButtons() {
  const cities = [
    {
      id: 1,
      name: "Cairo",
    },
    {
      id: 2,
      name: "Toronto",
    },
    {
      id: 3,
      name: "Sydney",
    },
    {
      id: 4,
      name: "Tokyo",
    },
    {
      id: 5,
      name: "London",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => {
        return (
          <button className="text-white text-lg font-medium transition ease-out hover:scale-105" key={city.id}>
            {city.name}
          </button>
        );
      })}
    </div>
  );
}

export default HeaderButtons;
