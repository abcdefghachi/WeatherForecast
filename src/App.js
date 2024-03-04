import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import TemperatureForecast from "./components/TemperatureForecast";
import TemperatureChart from "./components/TemperatureChart";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import { getWeather } from "./fetchApi/getWeatherApi";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("hanoi");

  useEffect(() => {
    const fetchData = async (cityName) => {
      try {
        const data = await getWeather(cityName);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData(city);
  }, [city]);

  return (
    <div className="App">
      <div className="mx-auto container-sm mt-4 py-5 px-3 shadow-lg w-75">
        <div className="row">
          <div className="col-4">
            <Search city={city} setCity={setCity} />
            <TemperatureForecast weatherData={weatherData} />
          </div>
          <div className="col-8">
            {weatherData && (
              <>
                <TemperatureChart
                  hours={weatherData.forecast.forecastday[0].hour}
                />
                <HourlyForecast
                  hours={weatherData.forecast?.forecastday[0]?.hour}
                />
                <DailyForecast days={weatherData.forecast.forecastday} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
