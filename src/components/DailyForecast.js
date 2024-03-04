import React, { useState, useEffect, useRef } from "react";

function DailyForecast({ days }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const monthNames = [
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
  ];

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowDetail(true);
  };

  const detailContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        detailContainerRef.current &&
        !detailContainerRef.current.contains(event.target)
      ) {
        setShowDetail(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <hr />
      <div className="row">
        {days.map((day) => (
          <div
            key={day.date_epoch}
            className="col-4 text-center my-2 px-3 cursor-pointer"
            onClick={() => handleDayClick(day)}
          >
            <p>
              <strong>{`${monthNames[new Date(day.date).getMonth()]} ${new Date(
                day.date
              ).getDate()}`}</strong>
            </p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{day.day.avgtemp_c}°C</p>
          </div>
        ))}
      </div>

      {selectedDay && showDetail && (
        <div
          ref={detailContainerRef}
          className="text-left mx-5 my-2 px-5"
          style={{
            backgroundColor: "#fff",
            border: "2px solid #89CFF0",
            borderRadius: "5px",
            boxShadow: "0 0 10px #F0FFFF",
            padding: "10px",
            position: "absolute",
            top: "10%",
            right: "15%",
            zIndex: "1",
            height: "400px",
            overflowY: "scroll",
            scrollbarWidth: "none", // Firefox
            "-ms-overflow-style": "none", // Internet Explorer 11
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Opera
            },
          }}
        >
          <p className="text-center">
            <strong>{selectedDay.date}</strong>
          </p>
          <div className="row d-flex justify-content-between">
            <div className="col-7">
              <p>
                <strong>Max Temperature :</strong> {selectedDay.day.maxtemp_c}°C
                ({selectedDay.day.maxtemp_f}°F)
              </p>
              <p>
                <strong>Min Temperature: </strong>
                {selectedDay.day.mintemp_c}°C ({selectedDay.day.mintemp_f}°F)
              </p>
              <p>
                <strong>Average Temperature: </strong>
                {selectedDay.day.avgtemp_c}°C ({selectedDay.day.avgtemp_f}°F)
              </p>
              <p>
                <strong>Max wind: </strong>
                {selectedDay.day.maxwind_mph}m/h ({selectedDay.day.maxwind_kph}
                km/h)
              </p>
              <p>
                <strong>Precipitation: </strong>
                {selectedDay.day.totalprecip_mm}mm (
                {selectedDay.day.totalprecip_in}
                inch)
              </p>
              <p>
                <strong>Humidity: </strong>
                {selectedDay.day.avghumidity}%
              </p>
              <p>
                <strong>Chance of rain: </strong>
                {selectedDay.day.daily_chance_of_rain}%
              </p>
              <p>
                <strong>Chance of snow: </strong>
                {selectedDay.day.daily_chance_of_snow}%
              </p>
              <p>
                <strong>UV : </strong>
                {selectedDay.day.uv}
              </p>
              <p>
                <strong>Condition: </strong>
                {selectedDay.day.condition.text}
              </p>
            </div>
            <div className="col-5">
              <p>
                <strong>Sunrise: </strong>
                {selectedDay.astro.sunset}
              </p>
              <p>
                <strong>Sunset: </strong>
                {selectedDay.astro.sunset}
              </p>
              <p>
                <strong>Moonrise: </strong>
                {selectedDay.astro.moonrise}
              </p>
              <p>
                <strong>Moonset: </strong>
                {selectedDay.astro.moonset}
              </p>
              <p>
                <strong>Moon Phase: </strong>
                {selectedDay.astro.moon_phase}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DailyForecast;
