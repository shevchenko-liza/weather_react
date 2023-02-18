import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Week";

export const options = {
  method: 'GET',
};
fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=30ab41f14ff9e61e55c8b8beeaa1c77a', options)
  .then(response => response.json())
  .then(date => console.log(date))
  .catch(err => console.error(err));

export const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const currentWeatherFetch = fetch
      ('https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=30ab41f14ff9e61e55c8b8beeaa1c77a')
    const forecastFetch = fetch
      ('https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=30ab41f14ff9e61e55c8b8beeaa1c77a')
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather({ ...weatherResponse });
        setForecast({ ...forcastResponse });
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}

    </>
  )
}
