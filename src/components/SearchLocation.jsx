import React from "react";
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { useState } from 'react';

function SearchLocation() {

  const [location, setLocation] = useState('');

  const onChange = (e) => {
    setLocation(e.target.value);
  };

  return <>
    <div className='h-screen pt-10 px-5'>
      <Link to={'/'}>
        <button className='btn btn-ghost mb-10'><span><IoMdArrowBack /></span>Back</button>
      </Link>
      <form className='join min-w-full'>
        <input class="input input-bordered join-item w-3/5 text-black" onChange={onChange} placeholder="Location" value={location} />
        <button class="btn btn-secondary text-white join-item rounded-r-xl">Search</button>
      </form>
    </div>
  </>;
}

export default SearchLocation;
