import axios from 'axios';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL =
    process.env.NODE_ENV === 'development '
        ? '/api'
        : 'https://api.weatherapi.com/v1';

const weather = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Get weather data
export const getWeatherData = async (location) => {
    let params;

    if (typeof location === 'string') {
        console.log('Getting location name to the api', location);
        params = new URLSearchParams({
            q: location,
            days: '7',
            key: WEATHER_API_KEY,
        });
    } else if (typeof location === 'object' && location.lat && location.lng) {
        console.log(
            'Getting object for location parameter',
            location.lng,
            location.lat
        );
        params = new URLSearchParams({
            q: `${location.lat},${location.lng}`,
            days: '3',
            key: WEATHER_API_KEY,
        });
    }
    console.log('Created the parameter with location');
    try {
        const response = await weather.get(`/forecast.json?${params}`);
        console.log('Fetched the response with api', response);
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.message);
            return {
                success: false,
                error: {
                    status: error.response.status,
                    message:
                        error.response.message ||
                        'An error occured Please check the spelling of location',
                },
            };
        } else if (error.request) {
            // The request was made but no response was recieved
            console.log('No response recieved from the server');
            return {
                success: false,
                error: {
                    message: 'No response recieved from the server',
                },
            };
        } else {
            console.log('An unknown error occured');
            return {
                success: false,
                error: {
                    message: error.message || 'An unknown error occured',
                },
            };
        }
    }
};
