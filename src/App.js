import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import sunset from '../src/assets/sunset.jpg';
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
            <Route path='/' element={
              <>
                <Header />
                <Dashboard />
              </>
            } />

          </Routes>
          <Footer />
        </div>
      </Router >
    </ WeatherProvider>
  );
}

export default App;
