import React from "react";
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { useState, useContext } from 'react';
import WeatherContext from '../context/location/WeatherContext';
import { getWeatherData } from '../context/location/WeatherAction';
import { useNavigate } from 'react-router-dom';

function SearchLocation() {

  const navigate = useNavigate();
  const [text, setText] = useState('');
  const { weatherData, dispatch } = useContext(WeatherContext);


  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text || text === null) {
      alert('Please enter a location');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const weatherData = await getWeatherData(text);
      setText('');
      dispatch({ type: 'GET_WEATHER_DATA', payload: weatherData });
      // dispatch({ type: 'SET_NO_LOCATION' });
      if (weatherData === undefined) {
        return alert('Location does not exist, Please check the spelling');
      }
      navigate('/');
    }
  };

  return <>
    <div className='h-screen pt-10 px-5'>
      <Link to={'/'}>
        <button className='btn btn-ghost mb-10'><span><IoMdArrowBack /></span>Back</button>
      </Link>
      <form className='join min-w-full' onSubmit={onSubmit}>
        <input className="input input-bordered join-item w-3/5 text-black" onChange={onChange} placeholder="Location" value={text} />
        <button className="btn btn-secondary text-white join-item rounded-r-xl" >Search</button>
      </form>
    </div>
  </>;
}

export default SearchLocation;
