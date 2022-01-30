import React, { useState } from "react";
import { getWeather } from "./API/GetWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getWeather(query).catch((error) => {
        alert(error);
      });
      setWeather(data);
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Serach..."
        onKeyPress={search}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      ></input>

      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
