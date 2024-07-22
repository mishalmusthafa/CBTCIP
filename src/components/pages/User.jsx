import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function User() {
    return (
        <>
            <div className="py-5 h-screen">
                <Link to={'/weather-details'}>
                    <button className="btn btn-ghost mb-8">
                        <span className="text-xl">
                            <IoMdArrowBack />
                        </span>
                        Back
                    </button>
                </Link>
                <div className="px-10">
                    <h1 className="text-3xl mb-2 text-center font-bold">
                        User
                    </h1>
                    <p>Coming Soon</p>
                </div>
            </div>
        </>
    );
}

export default User;
