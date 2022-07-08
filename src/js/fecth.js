import axios from "axios";
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'dd8a7c56bd7f5e6dc42321ae9ddd0efb';
export default async function getWeather(name, lg){
    const options = new URLSearchParams({
        q: name,
        appid: API_KEY,
        units: 'metric',
        lang: lg,
    });
    const url = `${URL}?${options}`;
    const responce = axios.get(url).catch(e => console.log(e));
    return responce;
};
