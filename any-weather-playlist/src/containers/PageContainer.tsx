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
    const { loading, error, userName } = useSelector((state: RootState) => state.base);
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
