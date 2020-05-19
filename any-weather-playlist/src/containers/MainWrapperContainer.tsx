import React, { useEffect, useState } from "react";
import MainWrapper from "components/MainWrapper";
import { useSelector } from "react-redux";
import { RootState } from "stores/modules";
import { fetchGetWeather } from "stores/modules/base";

const MainWrapperContainer = () => {
    const { userName, weather } = useSelector((state: RootState) => state.base);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchGetWeather();
        if (["clear sky", "clear"].includes(weather)) {
            setMessage("What a nice day!");
        } else if (
            ["clouds", "few clouds", "scattered clouds", "broken clouds"].includes(weather)
        ) {
            setMessage("Everybody else shares the same cloudy sky.");
        } else if (["shower rain", "rain", "thunderstorm"].includes(weather)) {
            setMessage("Stay dry");
        } else if (weather === "snow") {
            setMessage("HOORAY for Snow Days!");
        } else {
            setMessage("Today's weather is...¯\\_(ツ)_/¯");
        }
    }, [weather]);

    return <MainWrapper userName={userName} weather={weather} message={message} />;
};

export default MainWrapperContainer;
