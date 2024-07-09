import React from "react";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";


function SunriseSunset() {
  return <div className=" row-span-5 col-span-8 bg-white/15 backdrop-blur-3xl shadow-md rounded-md p-2 hover:scale-102 transition ease-in-out delay-100">
    <div className='flex flex-col  justify-between h-full'>
      <div className='flex justify-between px-3 py-4 '>
        <div className="text-xl"><FiSunrise /></div>
        <div className="text-xl"><FiSunset /></div>
      </div>
      {/* <div className='flex justify-center'> */}
      {/* <img src={sunImage} className='w-82 rounded-md ' style={{}} alt="" /> */}
      {/* </div> */}
      <div className='flex justify-between px-3 py-4'>
        <div className="text-gray-200 text-sm">Sunrise
          <div className='text-white text-md font-bold'>5:40am</div>
        </div>
        <div className="text-gray-200 text-sm">Sunset
          <div className='text-white text-md font-bold'>7:00pm</div>
        </div>
      </div>
    </div>
  </div>;

}

export default SunriseSunset;
