import { Link } from 'react-router-dom';

function NotFound() {
  return <div className='flex h-screen item-center justify-center'>
    <h1 className='text-5xl '>Page Not Found</h1>
    <Link to={'/'}>Go back to home page</Link>
  </div>;
}

export default NotFound;
