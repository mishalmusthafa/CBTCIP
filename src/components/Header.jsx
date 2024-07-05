import { FaLocationDot } from "react-icons/fa6";
import { getCurrentWeather } from '../services/apiServices';
import { useEffect, useState } from 'react';
import { getWeatherIcon } from '../utils/weatherIcon';
import { animated, useSpring } from '@react-spring/web';
import { Link } from 'react-router-dom';



function Header() {

  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [locationName, setLocationName] = useState('');

  const { current, location, forecast } = weatherData;

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await getCurrentWeather('kannur');
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err.message);
      }
    };
    fetchWeather();
  }, []);

  const onChange = (e) => {
    setLocationName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  };


  if (error) {
    return <div>No location</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  const forecastday = forecast.forecastday[0];

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
            <span className='mr-5'>{Math.floor(forecastday.day.mintemp_c)}&deg; / {Math.floor(forecastday.day.maxtemp_c)}&deg;</span>
            <span>Average Temperature: {Math.floor(forecastday.day.avgtemp_c)}&deg;</span>
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

export default Header;
