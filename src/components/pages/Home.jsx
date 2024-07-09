import Header from '../layout/Header';
import WeatherContext from '../../context/location/WeatherContext';
import { useContext, useEffect } from 'react';
import SunriseSunset from '../layout/SunriseSunset';
import WeatherForecast from '../layout/WeatherForecast';
import WeatherDetails from '../layout/WeatherDetails';
import Navigator from '../layout/Navigator';
import { useNavigate } from 'react-router-dom';
import Spinner from '../layout/Spinner';

function Home() {

  const navigate = useNavigate();
  const { loading, error, weatherData, dispatch } = useContext(WeatherContext);

  useEffect(() => {
    // Check if weatherData is empty caomponent mount
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

  if (error) {
    return alert(error.message);
  }

  if (!weatherData || Object.keys(weatherData).length === 0) {
    return null;
  }

  if (loading) {
    return <Spinner />;
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
