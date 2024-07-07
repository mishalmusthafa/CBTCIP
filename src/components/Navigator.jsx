import React from "react";
import { IoSettings } from "react-icons/io5";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Navigator() {
  return <div className="row-span-10 col-span-1 bg-white/15 backdrop-blur-3xl shadow-md rounded-md p-2 text-ellipsis overflow-hidden ">
    <div className='flex flex-row md:flex-col h-full w-full justify-around items-center'>
      <Link to={'/home'} className='flex flex-col items-center w-full md:mb-5'>
        <FaRegCircleUser className='text-4xl' /><small>User</small>
      </Link >

      <Link to={'/about'} className='flex flex-col items-center w-full'>
        <TiWeatherPartlySunny className='text-4xl' /><small>About</small>
      </Link>
      <Link to={'/settings'} className='flex flex-col items-center w-full'>
        <IoSettings className='text-4xl' /><small>Settings</small>
      </Link>
    </div>
  </div >;
}

export default Navigator;
