// Source: https://www.linkedin.com/posts/nick-foscarini_juniordeveloper-reactjs-frontenddeveloper-activity-6807984765627617280-2-Ux/

import React, { useEffect, useState } from 'react';

export function App() {

  // 1) initial state doesn't have any data.

  const [temp, setTemp] = useState(null);
  const [coords, setCoords] = useState();

  let key = process.env.REACT_APP_WEATHERBIT_API_KEY;

  // 2) request the visitors current location.

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => setCoords(coords));
  }, []);

  // 3) wait until user grants GPS permissions.

  useEffect(() => {
    if (!coords) {
      return;
    }

    //4) fetch weather data from the free API service using the visitors location.

    fetch(
      `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${coords.latitude}&lon=${coords.longitude}&units=I`
    )
      .then((res) => res.json())
      .then((data) => setTemp(data?.data[0]?.temp));
  }, [coords, key]);

  // 5) render a nice looking temperature for the user.

  return (
    <div className="flex flex-col bg-blue-50 items-center justify-center h-screen w-screen">
      <div className="font-bold text-2xl uppercase text-gray-400">Weather</div>
      <div className="font-bold text-5xl mt-3">
        {temp === null ? 'n/a' : temp}&deg;
      </div>
    </div>
  );
}

export default App;
