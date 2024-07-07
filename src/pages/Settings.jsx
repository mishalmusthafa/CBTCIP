import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function Settings() {
  return <>
    <div className='py-10 h-screen px-5'>
      <Link to={'/'}>
        <button className='btn btn-ghost mb-8'><span><IoMdArrowBack /></span>Back</button>
      </Link>
      <h1 className='text-3xl mb-2'>Settings</h1>
      <p>Coming Soon</p>
    </div>
  </>;
}

export default Settings;
