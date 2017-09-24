const API_KEY = "c69c4553d5133ba2c15a64b9c022d3d8";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}
