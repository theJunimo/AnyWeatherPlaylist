import { getWeatherAPI } from 'lib/api';

const SAVE_USERNAME = 'base/SAVE_USERNAME';

const GET_WEATHER = 'base/GET_WEATHER';
const GET_WEATHER_LOADING = 'base/GET_WEATHER_LOADING';
const GET_WEATHER_SUCCESS = 'base/GET_WEATHER_SUCCESS';
const GET_WEATHER_ERROR = 'base/GET_WEATHER_ERROR';

const initialState = {
    error: false,
    userName: '',
    weather: {
        main: 'error',
        temp: '0',
    }
}

export const getWeather = (lat, lng) => ({
    type: GET_WEATHER,
    payload: getWeatherAPI(lat, lng)
})

const base = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_USERNAME:
            const { userName } = action
            return{
                ...state,
                userName
            }
        case GET_WEATHER_LOADING:
                return {
                    ...state,
                    weather: {
                        temp: 0,
                        main: 'loading...'
                    }
                }
        case GET_WEATHER_SUCCESS:
            const data = action.payload.data;
            const temp = Math.ceil(data.main.temp - 273.15);
            const main = data.weather[0].main;
            return {
                ...state,
                weather: {
                    temp,
                    main
                }
            }
        case GET_WEATHER_ERROR:
            return {
                ...state,
                weather: {
                    temp: 0,
                    main: 'Error has occurred. please retry.'
                }
            }
        default:
            return initialState
    }
};

export default base;