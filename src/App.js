import Footer from '../src/components/layout/Footer';
import Settings from '../src/components/pages/Settings';
import About from '../src/components/pages/About';
import Home from '../src/components/pages/Home';
import User from '../src/components/pages/User';
import SearchLocation from '../src/components/layout/SearchLocation';
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
