import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

function About() {
    return (
        <>
            <div className="py-5 min-h-screen">
                <Link to={'/weather-details'}>
                    <button className="btn btn-ghost mb-8">
                        <span className="text-xl">
                            <IoMdArrowBack />
                        </span>
                        Back
                    </button>
                </Link>
                <div className="px-10 text-lg max-w-fit">
                    <h1 className="text-5xl mb-8 text-center font-bold">
                        About Weather App
                    </h1>
                    <p className="mb-5">
                        Weather Insights is a sophisticated web application
                        developed by Mishal PP, leveraging the robust API
                        services provided by WeatherAPI.com. This project
                        seamlessly integrates real-time weather data to deliver
                        accurate and comprehensive meteorological information to
                        users.
                    </p>
                    <strong>Key features of the application include:</strong>
                    <ul className="list-disc list-inside leading-10 mb-5">
                        <li>Current weather conditions</li>
                        <li>Detailed forecasts</li>
                        <li>Interactive user interface Responsive design</li>
                        <li>forcross-device compatibility</li>
                    </ul>
                    <p className="mb-5">
                        Developed as part of apersonal portfolio project,
                        Weather Insights demonstrates proficiency in API
                        integration, front-end development, and user experience
                        design. The application showcases the practical
                        application of modern web technologies to create a
                        useful, data-driven tool for everyday use. For inquiries
                        or collaboration opportunities, please contact Mishal PP
                        via <br />
                        <br />
                        <strong>email:</strong> mishalmusthafa12@gamil.com{' '}
                        <br />
                        <strong>GitHub Profile:</strong>{' '}
                        <a
                            href="https://github.com/mishalmusthafa"
                            target="blank"
                        >
                            https://github.com/mishalmusthafa
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
