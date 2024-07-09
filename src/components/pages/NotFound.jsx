import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function NotFound() {
  return <div className='hero min-h-screen'>
    <div className="text-center hero-content">
      <div className="max-w-lg">
        <h1 className="text-8xl font-bold mb-8">Oops!</h1>
        <p className='text-5xl mb-8'>404 Page not Found</p>
        <Link to='/' className='btn  bg-white/15 backdrop-blur-xl  hover:bg-secondary border-none'>
          <FaHome className='mr-2 text-xl' />
          Back to Home
        </Link>
      </div>
    </div>
  </div>;
}

export default NotFound;
