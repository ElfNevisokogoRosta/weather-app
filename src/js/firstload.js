import {renderTemperature, renderWind} from './render';
import WeatherData from './fecth';
const temperatureEl = document.querySelector('.weather__info');
const weatherFirstLoad = new WeatherData;
const geoOptions = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
};
async function geoOnSuccess(pos){
    const crd = pos.coords;
    const geo = [crd.latitude, crd.longitude];
    const cityName = await weatherFirstLoad.reverseGeo(geo);
    const r = await weatherFirstLoad.oneCall(geo);
    const temp = {
      temp: r.current.temp,
      feels_like: r.current.feels_like,
      pressure: r.current.pressure,
      humidity: r.current.humidity,
  };
  const wind = {
    speed: r.current.wind_speed,
    gust: r.current.wind_gust,
    deg: r.current.wind_deg,
};
    const weather = `<h3>${r.current.weather[0].description}</h3>`;
    const renderInfo = [`<h2>${cityName[0].name}</h2>`,renderTemperature(temp), renderWind(wind), weather ];
    temperatureEl.innerHTML = renderInfo.join('');
   
   }  

function geoOnError(){
   console.log('error');
}
navigator.geolocation.getCurrentPosition(geoOnSuccess, geoOnError, geoOptions);
