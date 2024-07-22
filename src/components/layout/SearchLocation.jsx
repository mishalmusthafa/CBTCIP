import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { useState, useContext } from 'react';
import WeatherContext from '../../context/location/WeatherContext';
import { getWeatherData } from '../../context/location/WeatherAction';
import { useNavigate } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import Spinner from './Spinner';

function SearchLocation() {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const { dispatch, loading, error, weatherData } =
        useContext(WeatherContext);
    const onChange = (e) => {
        setText(e.target.value);
    };

    // Find current position
    function getCurrentPosition() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                console.log('current location error');
                reject(
                    new Error('Geoloacation is not supported by your browser')
                );
            } else {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 0,
                });
            }
        });
    }

    const fetchLocation = async () => {
        try {
            const position = await getCurrentPosition();
            console.log('fetched current location');
            dispatch({ type: 'SET_LOADING' });

            console.log('Fetching the weather data');
            const result = await getWeatherData({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });

            console.log('Fetched weather data');
            console.log(result);

            if (result.success) {
                dispatch({ type: 'SET_LOADING' });
                console.log('Result data', result.data);
                dispatch({ type: 'GET_WEATHER_DATA', payload: result.data });
                navigate('/weather-details');
                console.log('dispatched the data to global');
            } else {
                dispatch({ type: 'SET_ERROR', payload: result.error.message });
                alert(error.message);
            }
        } catch (error) {
            console.error('Error fetching location or weather data', error);
            dispatch({ type: 'SET_ERROR', payload: error.message });
            let errorMessage = 'An error occurred while fetching data.';
            if (error.code === 1) {
                errorMessage =
                    'Location access denied. Please enable your location services.';
            } else if (error.code === 2) {
                errorMessage =
                    'Unable to determine your location. Please try again.';
            } else if (error.code === 3) {
                errorMessage = 'Location request timed out. Please try again.';
            }
            alert(errorMessage);
        }
    };

    // On Submit
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please enter a location');
        } else {
            dispatch({ type: 'SET_LOADING' });
            const result = await getWeatherData(text);
            if (result.success) {
                setText('');
                dispatch({ type: 'GET_WEATHER_DATA', payload: result.data });
                navigate('/weather-details');
            } else {
                dispatch({ type: 'SET_ERROR', payload: result.error.message });
                alert(result.error.message);
            }
        }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="h-screen pt-10 px-5 ">
                {Object.keys(weatherData).length >= 1 && (
                    <div>
                        <Link to={'/weather-details'}>
                            <button className="btn btn-ghost mb-10">
                                <span>
                                    <IoMdArrowBack />
                                </span>
                                Back
                            </button>
                        </Link>
                    </div>
                )}

                <button
                    className="btn w-full bg-white/10 backdrop-blur-2xl mb-10 hover:bg-secondary text-xl border-none md:max-w-sm"
                    onClick={fetchLocation}
                >
                    <MdLocationOn className="text-xl inline-block mb-2" />
                    Your Location Weather
                </button>
                <form className="join min-w-full" onSubmit={onSubmit}>
                    <input
                        className="input input-bordered join-item w-full text-black md:max-w-lg"
                        onChange={onChange}
                        placeholder="Location"
                        value={text}
                    />
                    <button className="btn btn-secondary text-white join-item rounded-r-xl">
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchLocation;
