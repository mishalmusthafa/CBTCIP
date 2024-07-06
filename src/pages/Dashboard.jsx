import SunriseSunset from '../components/SunriseSunset';
import WeatherForecast from '../components/WeatherForecast';
import WeatherDetails from '../components/WeatherDetails';
import Navigator from '../components/Navigator';




function Dashboard() {

  return <>
    <div className="flex flex-col px-5 sm:grid grid-rows-10 grid-cols-12 gap-4 pb-10 w-100">
      <Navigator />
      <SunriseSunset />
      <WeatherForecast />
      <WeatherDetails />
    </div>

  </>;
}

export default Dashboard;
