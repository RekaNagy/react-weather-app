import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "334b36c5746a1a951b825ac84fb5c889";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http:openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="type a city..."
        onChange={updateCity}
        className="search-city"
      />
      <input type="submit" value="Search" className="search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <br />
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C </li>
          <li>Wind: {weather.wind} km/h </li>
          <li>Humidity: {weather.humidity}% </li>
          <li>Description: {weather.description} </li>
          <li>
            {" "}
            <img src={weather.icon} alt="" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
