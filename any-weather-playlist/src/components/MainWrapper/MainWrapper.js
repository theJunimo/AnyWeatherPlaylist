import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MainWrapper.scss';
import classNames from 'classnames/bind';
import Greetings from 'components/Greetings';
import WeatherPresentation from 'components/WeatherPresentation';
import TimePresentation from 'components/TimePresentation';
import SCWidget from 'components/SCWidget';
const cx = classNames.bind(styles);

const MainWrapper = () => {
    const { userName, weather } = useSelector(state => state.base);

    return(
        <div className = {cx('MainWrapper')}>
            <div className = { cx('slide-up')}>
            <Greetings userName = { userName } weather = { weather }/>
            <TimePresentation />
            <WeatherPresentation weather = { weather }/>
            </div>
            <SCWidget/>
        </div>
    )
}

export default MainWrapper;