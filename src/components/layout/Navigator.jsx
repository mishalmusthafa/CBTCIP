import { IoSettings } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Navigator() {
  return <div className="row-span-10 col-span-1 bg-white/10 backdrop-blur-2xl shadow-md rounded-md p-2 text-ellipsis overflow-hidden ">
    <div className='flex flex-row md:flex-col h-full w-full justify-around items-center'>
      <Link to={'/user'} className='flex flex-col items-center w-full md:mb-5 hover:scale-102 transition ease-in duration-75'>
        <FaRegCircleUser className='text-4xl' /><small>User</small>
      </Link >

      <Link to={'/about'} className='flex flex-col items-center w-full hover:scale-102 transition ease-in duration-75'>
        <TiWeatherPartlySunny className='text-4xl' /><small>About</small>
      </Link>
      <Link to={'/settings'} className='flex flex-col items-center w-full hover:scale-102 transition ease-in duration-75 '>
        <IoSettings className='text-4xl hover:animate-spin-once' /><small>Settings</small>
      </Link>
    </div>
  </div >;
}

export default Navigator;
