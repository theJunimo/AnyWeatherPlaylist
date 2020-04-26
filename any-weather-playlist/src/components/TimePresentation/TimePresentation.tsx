import React, { useState, useEffect, useCallback } from "react";
import "./TimePresentation.scss";

const TimePresentation = () => {
    const [hh, setHour] = useState("0");
    const [mm, setMin] = useState("0");

    useEffect(() => {
        const getTime = setInterval(() => {
            const date = new Date();
            const hour = date.getHours();
            const min = date.getMinutes();
            const trimmedHH = `${hour > 9 ? hour : `0${hour}`}`;
            const trimmedMM = `${min > 9 ? min : `0${min}`}`;

            setHour(trimmedHH);
            setMin(trimmedMM);
        }, 1000);

        return () => clearInterval(getTime);
    }, []);

    return (
        <div className="TimePresentation">
            <span>{hh}</span>
            <span className="colon">:</span>
            <span>{mm}</span>
        </div>
    );
};

export default TimePresentation;
