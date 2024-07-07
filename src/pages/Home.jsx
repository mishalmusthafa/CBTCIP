import Header from '../components/Header';
import WeatherContext from '../context/location/WeatherContext';
import { useContext, useState, useEffect } from 'react';
import { getWeatherData } from '../context/location/WeatherAction';
import SunriseSunset from '../components/SunriseSunset';
import WeatherForecast from '../components/WeatherForecast';
import WeatherDetails from '../components/WeatherDetails';
import Navigator from '../components/Navigator';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  const { loading, error, weatherData, dispatch } = useContext(WeatherContext);
  console.log(!weatherData);

  useEffect(() => {
    // Check if weatherData is empty caomponent mount
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
  // const [currLocation, setCurrLocation] = useState(null);

  // Find current position
  // function getCurrentPosition() {
  //   return new Promise((resolve, reject) => {
  //     if (!navigator.geolocation) {
  //       reject(new Error('Geoloacation is not supported by your browser'));
  //     } else {
  //       navigator.geolocation.getCurrentPosition(resolve, reject);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     try {
  //       const position = await getCurrentPosition();
  //       setCurrLocation({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       });
  //     } catch (error) {
  //       setError('Failed to get location' + error.message);
  //     }
  //   };
  //   fetchLocation();
  // }, []);
  // console.log(location);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div className='h-screen'>Please Go to the search</div>;
  // }

  if (!weatherData || Object.keys(weatherData).length === 0) {
    return null;
  }

  return <>
    <Header />
    <div className="flex flex-col px-5 lg:grid grid-rows-10 grid-cols-12 gap-4 pb-10 w-100">
      <Navigator />
      <SunriseSunset />
      <WeatherForecast />
      <WeatherDetails />
    </div>
  </>;
}

export default Home;
