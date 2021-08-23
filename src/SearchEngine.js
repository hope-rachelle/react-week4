import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import ForecastTime from "./ForecastTime";
import "./SearchEngine.css";


export default function SearchEngine(props) {
const [city, setCity] = useState(props.city);
const [weather, setWeather] = useState("");
//const [time, setTime] = useState(props.time)


  function showWeather(response) {
    console.log(response);
    setWeather({
      city: response.data.name,
      tempC: Math.round(response.data.main.temp),
      tempF: Math.round(((response.data.main.temp) * 9)/ 5 + 32),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b363e026ec07ef9277957d351db8bbec";
    let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiWeather).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function recievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "b363e026ec07ef9277957d351db8bbec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(showWeather);
}
function getLocation(){
    navigator.geolocation.getCurrentPosition(recievePosition);
}

    
  return (
      <div className="app">
    <div className="body">
       <form onSubmit={handleSubmit} className="search">
        <input
          type="search"
          placeholder="Enter City"
          autoFocus="off"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
        <input type="submit" value="📫" onClick={getLocation} />
      </form>  
      
      <h1 className="city">
        {weather.city}
      </h1>
      <Time/>
      <ul className="elements">
        <li>
            <h3>{weather.description}</h3>
          <img src={weather.icon} alt="" />
        </li>
        <li> Temp {weather.tempC}°C | {weather.tempF}°F</li>
        <li> Humidity {weather.humidity}%</li>
        <li> Wind {weather.wind}mph</li>
      </ul>
      <div> 
    <ForecastTime/>
 
    <div className="row temp-by-hour">
        <div className="col-2">{weather.tempF}°F</div>
        <div className="col-2">{weather.tempF}°F</div>
        <div className="col-2">{weather.tempF}°F</div>
        <div className="col-2">{weather.tempF}°F</div>
        <div className="col-2">{weather.tempF}°F</div>
        <div className="col-2">{weather.tempF}°F</div>
      </div>
    </div>
      </div>
      <p id="source"> <a href="https://github.com/hope-rachelle/react-week4" target="_blank" rel="noreferrer">Open-Source Code </a>
    by Hope Ciuffa </p>
    </div>
  );
}