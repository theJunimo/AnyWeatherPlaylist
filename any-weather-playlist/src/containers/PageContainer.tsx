import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "stores/modules";

import { getWeatherAPI } from "lib/api";
import { getWeather, getWeatherSuccess, getWeatherFailure } from "stores/modules/base";

import Header from "components/common/Header";
import ErrorMessage from "components/ErrorMessage";
import MainWrapperContainer from "./MainWrapperContainer";
import PageTemplate from "components/PageTemplate";
import EnterUserNameContainer from "./EnterUserNameContainer";
import LoadingPage from "components/LoadingPage";

const PageContainer = () => {
    const dispatch = useDispatch();
    const { loading, error, userName } = useSelector((state: RootState) => state.base);

    useEffect(() => {
        const fetchGetWeather = async () => {
            dispatch(getWeather());
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
                dispatch(getWeatherSuccess(weather));
            } catch (e) {
                dispatch(getWeatherFailure());
            }
        };
        fetchGetWeather();
    }, [dispatch]);
    console.log("loading", loading);
    return (
        <>
            <Header />
            <PageTemplate>
                {loading && <LoadingPage />}
                {error && <ErrorMessage />}
                {!loading &&
                    !error &&
                    (!userName ? <EnterUserNameContainer /> : <MainWrapperContainer />)}
            </PageTemplate>
        </>
    );
};

export default PageContainer;
