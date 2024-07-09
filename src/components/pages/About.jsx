import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function About() {
  return <>
    <div className='py-5 h-screen'>
      <Link to={'/'}>
        <button className='btn btn-ghost mb-8'><span className='text-xl'><IoMdArrowBack /></span>Back</button>
      </Link>
      <div className='px-10'>
        <h1 className='text-3xl mb-2 text-center font-bold'>About Weather App</h1>
        <p>This is a weather application created by Mishal PP. I have created this using weatherapi.com and integrated with their api. This was a fun project for me</p>
      </div>
    </div>
  </>;
}

export default About;
