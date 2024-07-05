import React, { lazy, Suspense } from 'react';

// Lazy load all icons
const IoSunny = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoSunny })));
const IoPartlySunny = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoPartlySunny })));
const IoMdCloudy = lazy(() => import('react-icons/io').then(module => ({ default: module.IoMdCloudy })));
const WiDaySunnyOvercast = lazy(() => import('react-icons/wi').then(module => ({ default: module.WiDaySunnyOvercast })));
const RiMistFill = lazy(() => import('react-icons/ri').then(module => ({ default: module.RiMistFill })));
const IoMdRainy = lazy(() => import('react-icons/io').then(module => ({ default: module.IoMdRainy })));
const MdCloudySnowing = lazy(() => import('react-icons/md').then(module => ({ default: module.MdCloudySnowing })));
const WiSleet = lazy(() => import('react-icons/wi').then(module => ({ default: module.WiSleet })));
const MdSevereCold = lazy(() => import('react-icons/md').then(module => ({ default: module.MdSevereCold })));
const IoIosThunderstorm = lazy(() => import('react-icons/io').then(module => ({ default: module.IoIosThunderstorm })));
const MdFoggy = lazy(() => import('react-icons/md').then(module => ({ default: module.MdFoggy })));
const BsFillCloudFogFill = lazy(() => import('react-icons/bs').then(module => ({ default: module.BsFillCloudFogFill })));
const BsFillCloudLightningRainFill = lazy(() => import('react-icons/bs').then(module => ({ default: module.BsFillCloudLightningRainFill })));
const BsCloudRainHeavyFill = lazy(() => import('react-icons/bs').then(module => ({ default: module.BsCloudRainHeavyFill })));
const PiCloudRainLight = lazy(() => import('react-icons/pi').then(module => ({ default: module.PiCloudRainLight })));
const WiDaySleet = lazy(() => import('react-icons/wi').then(module => ({ default: module.WiDaySleet })));
const WiNightSleetStorm = lazy(() => import('react-icons/wi').then(module => ({ default: module.WiNightSleetStorm })));
const PiCloudSnowLight = lazy(() => import('react-icons/pi').then(module => ({ default: module.PiCloudSnowLight })));
const IoMdSnow = lazy(() => import('react-icons/io').then(module => ({ default: module.IoMdSnow })));
const TiWeatherSnow = lazy(() => import('react-icons/ti').then(module => ({ default: module.TiWeatherSnow })));
const WiSnow = lazy(() => import('react-icons/wi').then(module => ({ default: module.WiSnow })));
const FaCloudShowersHeavy = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaCloudShowersHeavy })));
const RiShowersFill = lazy(() => import('react-icons/ri').then(module => ({ default: module.RiShowersFill })));
const WiThunderstorm = lazy(() => import('react-icons/wi').then(module => ({ default: module.WiThunderstorm })));
const IoThunderstorm = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoThunderstorm })));
const WiDaySnowThunderstorm = lazy(() => import('react-icons/wi').then(module => ({ default: module.WiDaySnowThunderstorm })));

const weatherIcons = {
  1000: IoSunny,
  1003: IoPartlySunny,
  1006: IoMdCloudy,
  1009: WiDaySunnyOvercast,
  1030: RiMistFill,
  1063: IoMdRainy,
  1066: MdCloudySnowing,
  1069: WiSleet,
  1072: MdSevereCold,
  1087: IoIosThunderstorm,
  1135: MdFoggy,
  1147: BsFillCloudFogFill,
  1180: PiCloudRainLight,
  1183: PiCloudRainLight,
  1186: BsFillCloudLightningRainFill,
  1189: BsFillCloudLightningRainFill,
  1192: BsCloudRainHeavyFill,
  1195: BsCloudRainHeavyFill,
  1198: PiCloudRainLight,
  1201: PiCloudRainLight,
  1204: WiDaySleet,
  1207: WiNightSleetStorm,
  1210: PiCloudSnowLight,
  1213: PiCloudSnowLight,
  1216: PiCloudSnowLight,
  1219: IoMdSnow,
  1222: TiWeatherSnow,
  1225: TiWeatherSnow,
  1237: WiSnow,
  1240: RiShowersFill,
  1243: FaCloudShowersHeavy,
  1246: FaCloudShowersHeavy,
  1249: WiDaySleet,
  1252: WiNightSleetStorm,
  1255: PiCloudSnowLight,
  1258: MdCloudySnowing,
  1261: WiSnow,
  1264: WiSnow,
  1273: WiThunderstorm,
  1276: IoThunderstorm,
  1279: WiDaySnowThunderstorm,
  1282: WiDaySnowThunderstorm,
};

export const WeatherIcon = ({ code }) => {
  const Icon = weatherIcons[code] || IoPartlySunny;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Icon />
    </Suspense>
  );
};

export const getWeatherIcon = (code) => {
  return <WeatherIcon code={code} />;
};