import Header from '../components/Header';
import WeatherContext from '../context/location/WeatherContext';
import { useContext, useState, useEffect } from 'react';
import { getWeatherData } from '../context/location/WeatherAction';
import SunriseSunset from '../components/SunriseSunset';
import WeatherForecast from '../components/WeatherForecast';
import WeatherDetails from '../components/WeatherDetails';
import Navigator from '../components/Navigator';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

function Home() {

  const navigate = useNavigate();
  const { loading, error, weatherData, dispatch } = useContext(WeatherContext);

  useEffect(() => {
    // Check if weatherData is empty caomponent mount
    console.log('Entered to Home component');
    console.log('weatherData in Home:', weatherData);
    if (Object.keys(weatherData).length === 0) {
      navigate('/location');
    }
  }, [weatherData, navigate]);

  useEffect(() => {
    // Reset error state when component unmount
    return () => {
      dispatch({ type: 'CLEAR_ERROR' });
    };
  }, [dispatch]);


  // if (loading) {
  //   return <Spinner />;
  // }

  if (!weatherData || Object.keys(weatherData).length === 0) {
    return null;
  }

  return <>
    <div className='min-h-screen min-w-screen'>
      <Header />
      <div className="flex flex-col px-5 lg:grid grid-rows-10 grid-cols-12 gap-4 pb-10 w-100 ">
        <Navigator />
        <SunriseSunset />
        <WeatherForecast />
        <WeatherDetails />
      </div>
    </div>

  </>;
}

export default Home;
