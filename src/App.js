import Footer from './components/Footer';
import Settings from './pages/Settings';
import About from './pages/About';
import Home from './pages/Home';
import SearchLocation from '../src/components/SearchLocation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/location/WeatherContext';


function App() {
  return (
    <WeatherProvider >
      <Router Router >
        <div className="container mx-auto" >
          <Routes>
            <Route path='/location' element={<SearchLocation />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/settings' element={<Settings />} />

          </Routes>
          <Footer />
        </div>
      </Router >
    </ WeatherProvider>
  );
}

export default App;
