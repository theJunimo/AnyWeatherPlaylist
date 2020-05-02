import { getWeatherAPI } from "lib/api";

//action type 설정
const SAVE_USERNAME = "base/SAVE_USERNAME" as const;
const ERROR_OCCURRED = "base/ERROR_OCCURRED" as const;
const GET_WEATHER = "base/GET_WEATHER" as const;

//action 생성함수
export const saveUserName = (userName: string) => ({ type: SAVE_USERNAME, payload: userName });
export const errorOccurred = () => ({ type: ERROR_OCCURRED });
export const getWeather = (weather: any) => ({ type: GET_WEATHER, payload: weather });

//action객체에 대한 ts type
type ActionType = ReturnType<typeof saveUserName> | ReturnType<typeof getWeather> | ReturnType<typeof errorOccurred>;

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
            const userName = action.payload;
            return {
                ...state,
                userName,
            };
        case ERROR_OCCURRED:
            return {
                ...state,
                error: true,
            };
        case GET_WEATHER:
            const data = action.payload;
            return {
                ...state,
                weather: {
                    ...data,
                },
            };
        default:
            return initialState;
    }
};

export default base;
