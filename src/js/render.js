function renderTemperature(obj){
    return `<ul>
            <h2> Temperature </h2>
            <li>temp ${Math.floor(obj.temp)} C</li>
            <li>feels like ${Math.floor(obj.feels_like)} C</li>
            <li> pressure ${Math.floor(obj.pressure)} hPa</li>
            <li> Humidity ${obj.humidity}%</li>
            </ul>`
};
function renderWind(obj){
    let direction = '';
    if(obj.deg === 0){
        direction = 'E';
    }else if(obj.deg === 90){
        direction = 'N';
    }else if(obj.deg === 180){
        direction = 'W';
    }else if(obj.deg === 270){
        direction = 'S';
    }else if(obj.deg < 90){
        direction = 'E/N'; 
    }else if(obj.deg > 90 && obj.deg <180){
        direction = 'N/W';
    }else if(obj.deg > 180 && obj.deg<270){
        direction = 'W/S';
    }else if(obj.deg >270 && obj.deg<360){
        direction = 'S/E';
    }
    return `<ul>
        <h2> Wind </h2>
        <li> speed ${obj.speed} metre/sec</li>
        <li> gust ${obj.gust} metre/sec</li>
        <li> Wind direction ${direction}</li>
        </ul>`
};
export {renderTemperature, renderWind};