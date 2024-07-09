import Footer from './components/Footer';
import Settings from './pages/Settings';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';
import Spinner from './components/Spinner';
import SearchLocation from '../src/components/SearchLocation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/location/WeatherContext';



function App() {
  return (
    <Router Router >
      <WeatherProvider >
        <div className="container mx-auto h-full" >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/location' element={<SearchLocation />} />
            <Route path='/about' element={<About />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/user' element={<User />} />
          </Routes>
          <Footer />
        </div>
      </ WeatherProvider>
    </Router >
  );
}

export default App;
