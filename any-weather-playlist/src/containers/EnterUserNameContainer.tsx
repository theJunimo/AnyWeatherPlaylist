import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EnterUserName from "components/EnterUserName";
import { getWeather } from "stores/modules/base";

const EnterUserNameContainer = () => {
    const dispatch = useDispatch();

    const onSavingUserName = (userName: string) => dispatch({ type: "base/SAVE_USERNAME", userName });

    useEffect(() => {
        const fetchGetWeather = setInterval(async () => {
            try {
                // const geo = await getLatLngAPI();
                // const { lat, lng } = geo.data.location;
                // google cloud platform 무료 크레딧 종료로 고정된 lat, long 값 넣어줌
                dispatch(getWeather(37.566536, 126.977966));
            } catch (e) {
                dispatch({ type: "base/ERROR_OCCURRED" });
            }
        }, 1000 * 60 * 30); // time interval: 30mins

        return () => clearInterval(fetchGetWeather);
    }, []);

    return <EnterUserName onSavingUserName={onSavingUserName} />;
};

export default EnterUserNameContainer;
