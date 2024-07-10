import WeatherContext from '../../context/location/WeatherContext';
import { useContext } from 'react';
import { getWeatherIcon } from '../../utils/weatherIcon';

function WeatherForecast() {
  const { weatherData } = useContext(WeatherContext);

  const dailyForecast = weatherData.forecast.forecastday.map(day => ({
    date: day.date,
    maxtemp_c: day.day.maxtemp_c,
    mintemp_c: day.day.mintemp_c,
    condition: day.day.condition.text,
    icon: day.day.condition.icon,
    code: day.day.condition.code,
    date_epoch: day.date_epoch
    // Add any other daily fields you need
  }));

  const checkDay = (epoch) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dayNum = new Date(epoch * 1000).getDay();

    const today = new Date(Date.now()).getDay();
    const tomorrow = new Date(Date.now()).getDay() === 6 ? 0 : +1;

    if (dayNum === today) return 'Today';
    if (dayNum === tomorrow) return 'Tomorrow';

    return (days[dayNum]);
  };

  return <div className="row-span-10  col-span-3 bg-white/10 backdrop-blur-2xl shadow-md rounded-md p-2 h-full hover:scale-102 transition ease-in duration-75">
    {dailyForecast.map(({ date_epoch, maxtemp_c, mintemp_c, condition, code }) => (
      <div className='grid grid-cols-4 gap-0 py-2 px-2 mb-3 ' key={date_epoch} >
        <p className='col-span-1 pr-3 text-ellipsis overflow-hidden '>{checkDay(date_epoch)}</p>
        <div className='flex flex-row text-nowrap col-span-2 justify-start '>
          <span className='pt-1 mr-1 '>{getWeatherIcon(code)}</span>
          <span className='text-ellipsis overflow-hidden'>{condition}</span>
        </div>
        <span className='overflow-hidden text-nowrap text-end'>{Math.floor(maxtemp_c)}&deg;/{Math.floor(mintemp_c)}&deg;</span>
      </div>))}

  </div>;
}

export default WeatherForecast;
