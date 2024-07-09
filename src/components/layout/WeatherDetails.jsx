import WeatherContext from '../../context/location/WeatherContext';
import { useContext } from 'react';
import { BsThermometer } from 'react-icons/bs';
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { VscEye } from "react-icons/vsc";
import { IoSunnyOutline } from "react-icons/io5";



function WeatherDetails() {
  const { weatherData } = useContext(WeatherContext);

  const { current } = weatherData;


  const checkUV = (uv) => {
    if (uv > 0 && uv <= 3) {
      return 'low';
    } else if (uv > 3 && uv <= 5) {
      return 'moderate';
    } else if (uv > 5 && uv <= 7) {
      return 'high';
    } else if (uv > 7 && uv <= 10) {
      return 'very high';
    } else if (uv > 10) {
      return 'Extreame';
    }
  };


  return <div className=" row-span-5 col-span-8  ">
    <div className="grid grid-cols-3 grid-rows-2 h-full w-full gap-3 justify-center shadow-md  ">
      <div className="bg-white/15 backdrop-blur-xl rounded-md p-3 hover:scale-102 transition ease-in-out delay-100">
        <div className="flex flex-col">
          <BsThermometer />
          <small className='mt-2 text-xs text-gray-200' >Feels like</small>
          <p className='font-semibold text-xl'>{Math.floor(current.feelslike_c)}&deg;</p>
        </div>
      </div>
      <div className="bg-white/15 backdrop-blur-xl rounded-md p-3 hover:scale-102 transition ease-in-out delay-100">
        <div className="flex flex-col">
          <GiWindsock />
          <small className='mt-2 text-xs text-gray-200' >SW wind</small>
          <p className='font-semibold text-xl'>{Math.floor(current.wind_kph)}<span className='font-normal text-sm'> km/h</span></p>
        </div>
      </div>
      <div className="bg-white/15 backdrop-blur-xl rounded-md p-3 hover:scale-102 transition ease-in-out delay-100">
        <div className="flex flex-col">
          <WiHumidity />
          <small className='mt-2 text-xs text-gray-200' >Humidity</small>
          <p className='font-semibold text-xl'>{Math.floor(current.humidity)}<span className='font-normal text-sm'>%</span></p>
        </div>
      </div>
      <div className="bg-white/15 backdrop-blur-xl rounded-md p-3 hover:scale-102 transition ease-in-out delay-100">
        <div className="flex flex-col">
          <TbUvIndex />
          <small className='mt-2 text-xs text-gray-200' >UV</small>
          <p className='font-semibold text-xl'>{Math.floor(current.uv)}<span className='font-normal text-sm'> {checkUV(current.uv)}</span></p>
        </div>
      </div>
      <div className="bg-white/15 backdrop-blur-xl rounded-md p-3 hover:scale-102 transition ease-in-out delay-100">
        <div className="flex flex-col">
          <VscEye />
          <small className='mt-2 text-xs text-gray-200' >Visibility</small>
          <p className='font-semibold text-xl'>{Math.floor(current.vis_km)}<span className='font-normal text-sm'> km</span></p>
        </div>
      </div>
      <div className="bg-white/15 backdrop-blur-xl rounded-md p-3 hover:scale-102 transition ease-in-out delay-100">
        <div className="flex flex-col">
          <IoSunnyOutline />
          <small className='mt-2 text-xs text-gray-200' >Heat Index</small>
          <p className='font-semibold text-xl'>{Math.floor(current.heatindex_c)}&deg;</p>
        </div>
      </div>
    </div>
  </div>;
}

export default WeatherDetails;
