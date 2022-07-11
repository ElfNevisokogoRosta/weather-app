import axios from "axios";
const URL = 'https://api.openweathermap.org/data/2.5/onecall';
const API_KEY = 'dd8a7c56bd7f5e6dc42321ae9ddd0efb';
export default async function oneCall({lat, lon}){
    const options = new URLSearchParams({
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: 'metric',
    });
    const url = `${URL}?${options}`;
    const responce = axios.get(url).catch(e => console.log(e));
    return responce;
};
