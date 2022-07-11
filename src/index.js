import fetchWeather from './js/fecth';
import {renderTemperature, renderWind} from './js/render';
import geoOnSuccess from './js/firstload';
import oneCall from './js/onecall';

const formEl = document.querySelector('.citySearch');
const temperatureEl = document.querySelector('.weather__info');
const testBtn = document.querySelector('.test-btn');
formEl.addEventListener('submit', onFormSubmit);
async function onFormSubmit(e){
    e.preventDefault();
    const name = e.currentTarget.elements.cityQ.value.trim();
    if(name === ''){
        return console.log('empty string');
    }  
    const fetch = await fetchWeather(name);
    const weatherInfo = await fetch.data;
    const temp = weatherInfo.main;
    const wind =  weatherInfo.wind;
    const weather = weatherInfo.weather[0].description;    
    const renderInfo = [`<h2>${weatherInfo.name}</h2>`,renderTemperature(temp), renderWind(wind), weather ];
    temperatureEl.innerHTML = renderInfo.join('');
    const onecall = await oneCall(weatherInfo.coord);
    const onecallData = await onecall.data;
    console.log(onecallData);
};
