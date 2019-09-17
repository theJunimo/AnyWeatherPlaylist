import React, { useState, useEffect, useCallback } from 'react';
import styles from './TimePresentation.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const TimePresentation = () => {
    const [hh, setHh] = useState(0);
    const [mm, setMm] = useState(0);
    
    const getTime = useCallback(() => {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        const trimmedHH = `${hour > 9 ? hour : `0${hour}`}`;
        const trimmedMM = `${min > 9 ? min : `0${min}`}`;

        if(hh === trimmedHH) {
            if(mm === trimmedMM) return false;
            if(mm !== trimmedMM) return setMm(trimmedMM);
        } else {
            setHh(trimmedHH);
            if(mm === trimmedMM) return false;
            if(mm !== trimmedMM) return setMm(trimmedMM);
        }
    }, [hh, mm]);

    useEffect(() => {
        setInterval(getTime, 1);
        
        return () => clearInterval(getTime);
    },[getTime]);

    return (
        <div className = { cx('TimePresentation') } >
            <span>{ hh }</span>
            <span className = { cx('colon') }>:</span>
            <span>{ mm }</span>
        </div>
    )
}

export default TimePresentation;
