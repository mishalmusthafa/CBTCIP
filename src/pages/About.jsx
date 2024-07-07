import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function About() {
  return <>
    <div className='py-10 px-5 h-screen'>
      <Link to={'/'}>
        <button className='btn btn-ghost mb-8'><span><IoMdArrowBack /></span>Back</button>
      </Link>
      <h1 className='text-3xl mb-2'>About the Weather Application</h1>
      <p>This is a weather application created by Mishal PP. I have created this using the weatherapi.com and integrated with their api. This was a fun prject for me</p>
    </div>
  </>;
}

export default About;
