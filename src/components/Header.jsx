import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState, useContext } from 'react';
import { getWeatherIcon } from '../utils/weatherIcon';
import { animated, useSpring } from '@react-spring/web';
import { Link } from 'react-router-dom';
import WeatherContext from '../context/location/WeatherContext';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';


function Header() {
  const navigate = useNavigate();
  const { loading, weatherData, noLocation } = useContext(WeatherContext);

  const { location, current, forecast } = weatherData;



  console.log(weatherData.length);
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  if (weatherData.length === 0) {
    return <div className='pt-5'>
      <Link to={'/location'}>
        <div className='flex flex-row mb-5  top-0 left-0 pb-15 btn btn-ghost ps-0'>
          <BiSearch className=' mr-1  text-xl' />
          <p className='text-xl'>Search </p>
        </div>
      </Link>
    </div>;
  }

  if (!loading && weatherData != '') {
    return <>
      <div className='py-10 px-5 overflow-hidden'>
        <animated.div style={{ ...springs }}>

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
            <div className='absolute top-0 right-0 sm:relative '>
              <span className='text-3xl sm:text-9xl'>
                {getWeatherIcon(current.condition.code)}
              </span>
            </div>
          </div>
        </animated.div>
      </div>
    </>;
  }
}

export default Header;
