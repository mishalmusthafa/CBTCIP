import Header from '../components/Header';
import WeatherContext from '../context/location/WeatherContext';
import { useContext, useState, useEffect } from 'react';
import { getWeatherData } from '../context/location/WeatherAction';
import SunriseSunset from '../components/SunriseSunset';
import WeatherForecast from '../components/WeatherForecast';
import WeatherDetails from '../components/WeatherDetails';
import Navigator from '../components/Navigator';

function Home() {

  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  // Find current position
  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geoloacation is not supported by your browser'));
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getCurrentPosition();
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      } catch (error) {
        setError('Failed to get location' + error.message);
      }
    };
    fetchLocation();
  }, []);
  console.log(location);


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
