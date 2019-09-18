import React from 'react';
import styles from './WeatherPresentation.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WeatherPresentation = ({ weather }) => {
    const { temp, main } = weather;
    let type = main.toLowerCase();
    
    let iconURL = '/weatherIcon/thermometer.svg'

    if(type === 'clear sky' || type === 'clear') {
        iconURL = '/weatherIcon/sunny.svg'

    } else if (type === 'few clouds' || type === 'scattered cloud' || type === 'broken clouds') {
        iconURL = '/weatherIcon/cloud.svg'

    } else if(type === 'shower rain' || type === 'rain') {
        iconURL = '/weatherIcon/rain.svg'

    } else if(type === 'snow') {
        iconURL = '/weatherIcon/snow.svg'

    } else if(type === 'haze' || type === 'dust' || type === 'mist') {
        iconURL = '/weatherIcon/hazy.svg'

    } else if(type === 'thunderstorm') {
        iconURL = '/weatherIcon/thunderstorm.svg'
    }


    type = main.charAt(0).toUpperCase() + main.slice(1);

    return(
        <div className = { cx('WeatherPresentation') }>
            <div className = { cx('inner-wrapper')}>
                <div className = { cx('icon') }>
                    <img src = { iconURL } alt = 'weather-icon' />
                </div>
                <div className = { cx('content')}>
                    <span className = { cx('type') }>{ type }</span>
                    <span className = { cx('temp') }>{ temp }°</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherPresentation;