import React, { useState, useEffect } from 'react';
import './WeatherPresentation.scss';

type WeatherPresentationProps = {
    weather: string
    temp: number
}
const WeatherPresentation = ({ weather, temp }: WeatherPresentationProps) => {
    const [iconURL, setIconURL] = useState('/weatherIcon/thermometer.svg');

    useEffect(() => {
        if(weather === 'clear sky' || weather === 'clear') {
            setIconURL('/weatherIcon/sunny.svg');
        } else if (weather === 'clouds') {
            setIconURL('/weatherIcon/cloud.svg');
        } else if(weather === 'shower rain' || weather === 'rain') {
            setIconURL('/weatherIcon/rain.svg');
        } else if(weather === 'snow') {
            setIconURL('/weatherIcon/snow.svg');
        } else if(weather === 'haze' || weather === 'dust' || weather === 'mist') {
            setIconURL('/weatherIcon/hazy.svg');
        } else if(weather === 'thunderstorm') {
            setIconURL('/weatherIcon/thunderstorm.svg');
        } else {
            setIconURL('/weatherIcon/thermometer.svg');
        };
    }, [weather]);

    return(
        <div className = 'WeatherPresentation'>
            <div className = 'inner-wrapper'>
                <div className = 'icon'>
                    <img src = { iconURL } alt = 'weather-icon' />
                </div>
                <div className = 'content'>
                    <span className = 'type'>{ weather }</span>
                    <span className = 'temp'>{ temp }°</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherPresentation;