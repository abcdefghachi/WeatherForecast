import axios from "axios";

export async function getWeather(city) {
  try {
    const adjustedCity = city.toLowerCase().replace(" ", "");
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=${adjustedCity}&days=10&api=no&alerts=yes`
    );
    return response.data;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
  // return fetch(
  //   `https://api.weatherapi.com/v1/forecast.json?key=f5ac4be4a19c47d8a3e42522222112&q=${adjustedCity}&days=10&api=no&alerts=yes`
  // )
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.error("Error", error);
  //     return null;
  //   });
}
