import { FaLocationDot } from "react-icons/fa6";
import { useContext } from 'react';
import { getWeatherIcon } from '../../utils/weatherIcon';
import { Link } from 'react-router-dom';
import WeatherContext from '../../context/location/WeatherContext';

function Header() {
  const { weatherData } = useContext(WeatherContext);
  const { location, current, forecast } = weatherData;

  return <>
    <div className='py-10 px-5 overflow-hidden'>
      <div className='flex flex-row justify-center items-center relative text-center pt-12 sm:justify-between md:text-start'>
        <div>
          <Link to={'/location'}>
            <div className='flex flex-row mb-5 absolute top-0 left-0 pb-15 btn btn-ghost ps-0'>
              <FaLocationDot className=' mr-1  text-lg' />
              <p className='text-xl'>{location.name}</p>
            </div>
          </Link>
          <h3 className='mb-5 text-3xl sm:mb-16'>{current.condition.text}</h3>
          <h3 className='mb-5 text-6xl font-bold'>{Math.floor(current.temp_c)}<span>&deg;C</span></h3>
          <span className='mr-5'>{Math.floor(forecast.forecastday[0].day.mintemp_c)}&deg; / {Math.floor(forecast.forecastday[0].day.maxtemp_c)}&deg;</span>
          <span>Average Temperature: {Math.floor(forecast.forecastday[0].day.avgtemp_c)}&deg;</span>
        </div>
        <div className='absolute top-0 right-0 hover:scale-105 transition ease-in duration-75 sm:relative '>
          <span className='text-3xl sm:text-9xl '>
            {getWeatherIcon(current.condition.code)}
          </span>
        </div>
      </div>
    </div>
  </>;
}


export default Header;
