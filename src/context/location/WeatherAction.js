import axios from 'axios';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

const weather = axios.create({
  baseURL: BASE_URL,
  header: {
    'Content-Type': 'application/json',
  }
});

// Get weather data
export const getWeatherData = async (text) => {
  const params = new URLSearchParams({
    q: text,
    days: '7',
    key: WEATHER_API_KEY
  });

  try {
    const response = await weather.get(`/forecast.json?${params}`);
    return { success: true, data: response.data };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        success: false,
        error: {
          status: error.response.status,
          message: error.response.message || 'An error occured Please check the spelling of location'
        }
      };
    } else if (error.request) {
      // The request was made but no response was recieved
      return {
        success: false,
        error: {
          message: 'No response recieved from the server'
        }
      };
    } else {
      return {
        success: false,
        error: {
          message: error.message || 'An unknown error occured'
        }
      };
    }
  }
};
