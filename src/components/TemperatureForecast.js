import React, { useState, useEffect } from "react";

function TemperatureForecast({ weatherData }) {
  const formatLocalDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      dateTime.getDay()
    ];
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][dateTime.getMonth()];
    const date = dateTime.getDate();
    const hours = dateTime.getHours() % 12 || 12;
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");
    const ampm = dateTime.getHours() >= 12 ? "PM" : "AM";
    return `${dayOfWeek}, ${month} ${date}, ${hours}:${minutes} ${ampm}`;
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h2>{weatherData ? weatherData.location.name : "Loading..."}</h2>
      </div>
      {weatherData && (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <img src={weatherData.current.condition.icon} alt="Weather Icon" />
            <p className="fs-1 mt-3 px-3">{weatherData.current.temp_c}°C</p>
          </div>
          <div className="text-center fw-bold my-4">
            {formatLocalDateTime(weatherData.location.localtime)}
          </div>
          <div className="row justify-content-center">
            <div className="col-5 text-center">
              <div>Humidity:</div>
              <span className="fw-bold">{weatherData.current.humidity}%</span>
            </div>
            <div className="col-5 text-center">
              <div>Wind speed:</div>
              <span className="fw-bold">
                {weatherData.current.wind_kph} km/h
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TemperatureForecast;
