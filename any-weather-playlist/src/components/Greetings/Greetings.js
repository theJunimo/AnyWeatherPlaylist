import React, { useState, useEffect, useCallback } from 'react';
import styles from './Greetings.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Greetings = ({userName, weather}) => {
    const [ msg, setMsg ] = useState('Welcome!');
    const type = weather.main.toLowerCase();

    const handleMsg = useCallback(() => {
        if(type === 'clear sky') {
            setMsg('What a nice day!');
        } else if (type === 'few clouds' || type === 'scattered cloud' || type === 'broken clouds') {
            setMsg('Everybody else shares the same cloudy sky.');
        } else if(type === 'shower rain' || type === 'rain' ||type === 'thunderstorm') {
            setMsg('Stay dry');
        } else if(type === 'snow') {
            setMsg('HOORAY For Snow Days!');
        } else if(type === 'haze' || type === 'dust' || type === 'mist') {
            setMsg("Today's weather is...¯\\_(ツ)_/¯")
        };
    },[type]);

    useEffect(() => {
        handleMsg();
    },[handleMsg]);

    return(
        <div className = {cx('Greetings')}>
            <div className = {cx('content')}>
                <span>{`${userName},`} &nbsp; </span>
                <span>{ msg }</span>
            </div>
        </div>
    )
}

export default Greetings;