import Footer from '../src/components/layout/Footer';
import Settings from '../src/components/pages/Settings';
import About from '../src/components/pages/About';
import Home from '../src/components/pages/Home';
import User from '../src/components/pages/User';
import NotFound from '../src/components/pages/NotFound';
import SearchLocation from '../src/components/layout/SearchLocation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/location/WeatherContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router Router>
            <WeatherProvider>
                <div className="container mx-auto px-4 max-w-7xl h-full ">
                    <Routes>
                        <Route path="/" element={<SearchLocation />} />
                        <Route path="/weather-details" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </WeatherProvider>
            <ToastContainer />
        </Router>
    );
}

export default App;
