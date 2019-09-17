import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLatLngAPI } from 'lib/api';
import EnterUserName from 'components/EnterUserName';
import { getWeather } from 'stores/modules/base';

const EnterUserNameContainer = () => {
    const dispatch = useDispatch();

    const onSavingUserName = useCallback(
        (userName) => dispatch({type: 'base/SAVE_USERNAME', userName}),
        [dispatch]
    )

    useEffect(() => {
        async function fetchGetWeather() {
            try {
                const geo = await getLatLngAPI();
                const { lat, lng } = geo.data.location;
                dispatch(getWeather(lat, lng));
            } catch (e) {
                console.log(e);
            }
        }
        
        fetchGetWeather();
        setInterval(fetchGetWeather, 1000 * 60 * 30); // time interval: 30mins

        return () => clearInterval(fetchGetWeather);
    },[dispatch])

    return(
        <EnterUserName
            onSavingUserName = { onSavingUserName }/>
    )
}

export default EnterUserNameContainer;