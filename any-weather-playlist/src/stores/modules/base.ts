import { getWeatherAPI } from "lib/api";

//action type 설정
const SAVE_USERNAME = "base/SAVE_USERNAME" as const;
const ERROR_OCCURRED = "base/ERROR_OCCURRED" as const;
const GET_WEATHER = "base/GET_WEATHER" as const;
const GET_WEATHER_LOADING = "base/GET_WEATHER_LOADING" as const;
const GET_WEATHER_SUCCESS = "base/GET_WEATHER_SUCCESS" as const;
const GET_WEATHER_ERROR = "base/GET_WEATHER_ERROR" as const;

//action 생성함수
export const saveUserName = (userName: string) => ({ type: SAVE_USERNAME, payload: userName });
export const errorOccurred = () => ({ type: ERROR_OCCURRED });
export const getWeather = (lat: number, lng: number) => ({ type: GET_WEATHER, payload: getWeatherAPI(lat, lng) });
export const getWeatherLoading = () => ({ type: GET_WEATHER_LOADING });
export const getWeatherSuccess = (data: { main: string; temp: number }) => ({
    type: GET_WEATHER_SUCCESS,
    payload: data,
});
export const getWeatherError = () => ({ type: GET_WEATHER_ERROR });

//action객체에 대한 ts type
type ActionType =
    | ReturnType<typeof saveUserName>
    | ReturnType<typeof errorOccurred>
    | ReturnType<typeof getWeatherSuccess>
    | ReturnType<typeof getWeatherLoading>
    | ReturnType<typeof getWeatherError>;

//initialState 타입 설정
type InitialStateType = {
    error: boolean;
    userName: string;
    weather: {
        main: string;
        temp: number;
    };
};

//initialState
const initialState = {
    error: false,
    userName: "",
    weather: {
        main: "error",
        temp: 0,
    },
};

//리듀서
const base = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SAVE_USERNAME:
            const name = action.payload;
            return {
                ...state,
                name,
            };
        case ERROR_OCCURRED:
            return {
                ...state,
                error: true,
            };
        case GET_WEATHER_LOADING:
            return {
                ...state,
                weather: {
                    temp: 0,
                    main: "loading...",
                },
            };
        case GET_WEATHER_SUCCESS:
            const data = action.payload;
            const temp = Math.ceil(data.temp - 273.15);
            const main = data.main;
            return {
                ...state,
                weather: {
                    temp,
                    main,
                },
            };
        case GET_WEATHER_ERROR:
            return {
                ...state,
                weather: {
                    temp: 0,
                    main: "Error has occurred. please retry.",
                },
            };
        default:
            return initialState;
    }
};

export default base;
