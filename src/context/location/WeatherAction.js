import axios from 'axios';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

const weather = axios.create({
  baseURL: BASE_URL,
  header: {
    'Content-Type': 'application/json',
    // Authorization: `token${WEATHER_API_KEY}`
  }
});

// Get weather data
export const getWeatherData = async (text) => {
  const params = new URLSearchParams({
    q: text
  });

  try {
    const response = await weather.get(`/forecast.json?${params}&days=7&KEY=${WEATHER_API_KEY}`);
    return response.data;
  } catch (error) {
    if (error.code) {
      console.log(error.code);
    }
  }
};
