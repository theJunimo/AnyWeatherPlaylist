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
        const func = async () => {
            try {
                // const geo = await getLatLngAPI();
                // const { lat, lng } = geo.data.location;
                // google cloud platform 무료 크레딧 종료로 고정된 lat, long 값 넣어줌
                const response = await getWeatherAPI(37.566536, 126.977966);
                const weather = {
                    main: response.data.weather[0].main,
                    temp: Math.ceil((response.data.main.temp - 32) / 1.8),
                };
                dispatch(getWeather(weather));
            } catch (e) {
                dispatch({ type: "base/ERROR_OCCURRED" });
            }
        };
        func();
        const fetchGetWeather = setInterval(async () => {
            try {
                // const geo = await getLatLngAPI();
                // const { lat, lng } = geo.data.location;
                // google cloud platform 무료 크레딧 종료로 고정된 lat, long 값 넣어줌
                const weather = await getWeatherAPI(37.566536, 126.977966);
                dispatch(getWeather(weather));
            } catch (e) {
                dispatch({ type: "base/ERROR_OCCURRED" });
            }
        }, 1000 * 60 * 30); // time interval: 30mins
        return () => clearInterval(fetchGetWeather);
    }, []);

    return <MainWrapper userName={userName} weather={weather} />;
};

export default MainWrapperContainer;
