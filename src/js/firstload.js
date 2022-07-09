import axios from "axios";
import {renderTemperature, renderWind} from './render';
const API_KEY = 'dd8a7c56bd7f5e6dc42321ae9ddd0efb';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const temperatureEl = document.querySelector('.weather__info');
const geoOptions = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
  };
 async function geoOnSuccess(pos){
    const crd = pos.coords;
    const options =  new URLSearchParams({
        lat: crd.latitude,
        lon: crd.longitude,
        appid: API_KEY,
        units: 'metric',
      })
      const url = `${URL}?${options}`
      const responce = await axios.get(url);
      const temp = responce.data.main;
      const wind =responce.data.wind;
      const weather = responce.data.weather[0].description;
      const renderinfo = [`<h2>${responce.data.name}</h2>`, renderTemperature(temp), renderWind(wind), weather]
      temperatureEl.innerHTML = renderinfo.join('');
    }  

function geoOnError(){
    console.log('error');
}
navigator.geolocation.getCurrentPosition(geoOnSuccess, geoOnError, geoOptions);
