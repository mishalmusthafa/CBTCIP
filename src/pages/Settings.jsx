import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function Settings() {
  return <>
    <div className='py-5 h-screen'>
      <Link to={'/'}>
        <button className='btn btn-ghost mb-8'><span className='text-xl'><IoMdArrowBack /></span>Back</button>
      </Link>
      <div className='px-10'>
        <h1 className='text-3xl mb-2 text-center'>Settings</h1>
        <p>Coming Soon</p>
      </div>
    </div>
  </>;
}

export default Settings;
