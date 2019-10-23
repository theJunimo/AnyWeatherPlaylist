import React, { useState, useEffect } from 'react';
import styles from './WeatherPresentation.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WeatherPresentation = ({ weather }) => {
    const [iconURL, setIconURL] = useState('/weatherIcon/thermometer.svg');
    const [type, setType] = useState(weather.main);

    useEffect(() => {
        const { main } = weather;
        const type = main.toLowerCase();

        if(type === 'clear sky' || type === 'clear') {
            setIconURL('/weatherIcon/sunny.svg');
        } else if (type === 'clouds') {
            setIconURL('/weatherIcon/cloud.svg');
        } else if(type === 'shower rain' || type === 'rain') {
            setIconURL('/weatherIcon/rain.svg');
        } else if(type === 'snow') {
            setIconURL('/weatherIcon/snow.svg');
        } else if(type === 'haze' || type === 'dust' || type === 'mist') {
            setIconURL('/weatherIcon/hazy.svg');
        } else if(type === 'thunderstorm') {
            setIconURL('/weatherIcon/thunderstorm.svg');
        } else {
            setIconURL('/weatherIcon/thermometer.svg');
        };
    }, [weather]);

    return(
        <div className = { cx('WeatherPresentation') }>
            <div className = { cx('inner-wrapper')}>
                <div className = { cx('icon') }>
                    <img src = { iconURL } alt = 'weather-icon' />
                </div>
                <div className = { cx('content')}>
                    <span className = { cx('type') }>{ type }</span>
                    <span className = { cx('temp') }>{ weather.temp }°</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherPresentation;