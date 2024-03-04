import React, { useState, useEffect } from "react";

function HourlyForecast({ hours }) {
  return (
    <>
      <hr></hr>
      <div
        className="d-flex flex-row text-center"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none", // Firefox
          "-ms-overflow-style": "none", // Internet Explorer 11
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Opera
          },
        }}
      >
        {(hours || []).map((hour) => (
          <div key={hour.time_epoch} className="text-center mx-2">
            <p>
              {new Date(hour.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <img src={hour.condition.icon} alt={hour.condition.text} />
            <p>{hour.temp_c}°C</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default HourlyForecast;
