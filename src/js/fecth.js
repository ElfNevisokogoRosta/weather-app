import axios from "axios";
export default class WeatherData {
    constructor(){
        this.API_KEY = 'dd8a7c56bd7f5e6dc42321ae9ddd0efb';
    };
    async geoData(name){
        const URL = 'https://api.openweathermap.org/geo/1.0/direct';
        const options = new URLSearchParams({
            q: name,
            appid: this.API_KEY,
        })
        const url = `${URL}?${options}`;
        const responce = await axios.get(url);
        return responce.data;
    };
    async oneCall(arr){
        const URL = 'https://api.openweathermap.org/data/2.5/onecall';
        const options = new URLSearchParams({
            lat: arr[0],
            lon: arr[1],
            appid: this.API_KEY,
            units: 'metric',
        })
        const url = `${URL}?${options}`
        const responce = await axios.get(url);
        return responce.data;
    };
    async reverseGeo(arr){
        const URL = 'https://api.openweathermap.org/geo/1.0/reverse';
        const options = new URLSearchParams({
            lat: arr[0],
            lon: arr[1],
            appid: this.API_KEY,
        });
        const url =`${URL}?${options}`;
        const responce = await axios.get(url);
        return responce.data;
    };
}
