import React from "react";
import "./MainWrapper.scss";
import Greetings from "components/Greetings";
import WeatherPresentation from "components/WeatherPresentation";

import SCWidget from "components/SCWidget";
import TimePresentation from "components/TimePresentation";

type MainWrapperProps = {
    userName: string;
    weather: {
        main: string;
        temp: number;
    };
};
const MainWrapper = ({ userName, weather }: MainWrapperProps) => {
    return (
        <div className="MainWrapper">
            <div className="slide-up">
                <Greetings userName={userName} weather={weather.main} />
                <TimePresentation />
                <WeatherPresentation weather={weather.main} temp={weather.temp} />
            </div>
            <SCWidget />
        </div>
    );
};

export default MainWrapper;
