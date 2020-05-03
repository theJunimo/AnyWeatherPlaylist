import React, { useEffect } from "react";
import MainWrapper from "components/MainWrapper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "stores/modules";
import { getWeather } from "stores/modules/base";
import { getWeatherAPI } from "lib/api";

const MainWrapperContainer = () => {
    const dispatch = useDispatch();
    const { userName, weather } = useSelector((state: RootState) => state.base);

    useEffect(() => {
        const fetchGetWeather = async () => {
            try {
                // const geo = await getLatLngAPI();
                // const { lat, lng } = geo.data.location;
                // google cloud platform 무료 크레딧 종료로 서울 날씨 가져오도록 수정
                const response = await getWeatherAPI();
                const weather = {
                    main: response.data.weather[0].main.toLowerCase(),
                    // kelvin to celcius formula
                    temp: Math.ceil(response.data.main.temp - 273.15),
                };
                dispatch(getWeather(weather));
            } catch (e) {
                dispatch({ type: "base/ERROR_OCCURRED" });
            }
        };
        fetchGetWeather();
        const fetchGetWeatherInterval = setInterval(fetchGetWeather, 1000 * 60 * 30); // time interval: 30mins
        return () => clearInterval(fetchGetWeatherInterval);
    }, []);

    return <MainWrapper userName={userName} weather={weather} />;
};

export default MainWrapperContainer;
