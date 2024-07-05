import SunriseSunset from '../components/SunriseSunset';
// import { FaLocationDot } from "react-icons/fa6";
// import { getCurrentWeather } from '../services/apiServices';
// import { useEffect, useState } from 'react';
// import { getWeatherIcon } from '../utils/weatherIcon';
// // const { current, location, forecast } = weatherData;



function Dashboard() {
  // const [weatherData, setWeatherData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);



  return <div>
    <div className="flex flex-col px-5 sm:grid grid-rows-10 grid-cols-12 gap-4 pb-10 w-100">
      <div className="row-span-10 col-span-1 bg-white/15 backdrop-blur-3xl shadow-md rounded-md p-2 text-ellipsis overflow-hidden sm:min-h-96">setting and other other things</div>
      <SunriseSunset />
      <div className="row-span-10  col-span-3 bg-white/10 backdrop-blur-3xl shadow-md rounded-md p-2">03</div>
      <div className=" row-span-5 col-span-8 bg-white/15 backdrop-blur-3xl shadow-md  rounded-md p-2">04</div>
    </div>

  </div>;
}

export default Dashboard;
