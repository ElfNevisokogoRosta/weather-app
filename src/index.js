import WeatherData from './js/fecth';
import {renderTemperature, renderWind} from './js/render';
import geoOnSuccess from './js/firstload';


const formEl = document.querySelector('.citySearch');
const temperatureEl = document.querySelector('.weather__info');
const weatherAPI = new WeatherData;
formEl.addEventListener('submit', onFormSubmit);
async function onFormSubmit(e){
    e.preventDefault();
    const name = e.currentTarget.elements.cityQ.value.trim();
    if(name === ''){
        return console.log('empty string');
    }  
    const fetch = await weatherAPI.geoData(name);
    console.log(fetch);
    const geoLat = await fetch[0].lat;
    const geoLon = await fetch[0].lon;
    const obj = [geoLat, geoLon];
    console.log(obj);
    const weatherFetch = await weatherAPI.oneCall(obj);
    const temp = {
        temp: weatherFetch.current.temp,
        feels_like: weatherFetch.current.feels_like,
        pressure: weatherFetch.current.pressure,
        humidity: weatherFetch.current.humidity,
    };
    const wind = {
        speed: weatherFetch.current.wind_speed,
        gust: weatherFetch.current.wind_gust,
        deg: weatherFetch.current.wind_deg,
    };
    const weather = `<h3>${weatherFetch.current.weather[0].description}</h3>`;
    const renderInfo = [`<h2>${fetch[0].name}</h2>`,renderTemperature(temp), renderWind(wind), weather ];
    temperatureEl.innerHTML = renderInfo.join('');
};
