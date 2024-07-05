import axios from 'axios';

let weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const BASE_URL = 'http://api.weatherapi.com/v1';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getCurrentWeather = (location) => {
  return api.get(`/forecast.json?q=${location}&key=${weatherApiKey}`);
};

export default api

