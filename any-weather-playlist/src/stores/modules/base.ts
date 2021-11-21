import { RootState } from "./index";
import { getWeatherAPI } from "lib/api";
import { ThunkAction } from "redux-thunk";

//action type 설정
const SAVE_USERNAME = "base/SAVE_USERNAME" as const;
const GET_WEATHER = "base/GET_WEATHER" as const;
const GET_WEATHER_SUCCESS = "base/GET_WEATHER_SUCCESS" as const;
const GET_WEATHER_FAILURE = "base/GET_WEATHER_FAILURE" as const;

//action 생성함수
export const saveUserName = (userName: string) => ({ type: SAVE_USERNAME, payload: userName });
export const getWeather = () => ({ type: GET_WEATHER });
export const getWeatherSuccess = (weather: any) => ({
  type: GET_WEATHER_SUCCESS,
  payload: weather,
});
export const getWeatherFailure = () => ({ type: GET_WEATHER_FAILURE });

//action객체에 대한 ts type
type ActionType =
  | ReturnType<typeof saveUserName>
  | ReturnType<typeof getWeather>
  | ReturnType<typeof getWeatherSuccess>
  | ReturnType<typeof getWeatherFailure>;

export const fetchGetWeather = (): ThunkAction<void, RootState, null, ActionType> => {
  return async (dispatch) => {
    dispatch(getWeather());
    try {
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(
          async (data) => {
            let position;
            position = { longitude: data.coords.longitude, latitude: data.coords.latitude };
            const response = await getWeatherAPI(position);
            const payload = {
              main: response.data.weather[0].main.toLowerCase(),
              // kelvin to celcius formula
              temp: Math.ceil(response.data.main.temp - 273.15),
              city: response.data.name,
            };
            dispatch(getWeatherSuccess(payload));
          },
          async () => {
            const response = await getWeatherAPI();
            const payload = {
              main: response.data.weather[0].main.toLowerCase(),
              // kelvin to celcius formula
              temp: Math.ceil(response.data.main.temp - 273.15),
              city: response.data.name,
            };
            dispatch(getWeatherSuccess(payload));
          },
        );
      }
    } catch (e) {
      dispatch(getWeatherFailure());
    }
  };
};

//initialState 타입 설정
type InitialStateType = {
  loading: boolean;
  error: boolean;
  userName: string;
  weather: {
    main: string;
    temp: number;
  };
  city: string;
};

//initialState
const initialState = {
  loading: false,
  error: false,
  userName: "",
  weather: {
    main: "error",
    temp: 0,
  },
  city: "",
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
    case GET_WEATHER:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER_SUCCESS:
      const { city, ...rest } = action.payload;
      return {
        ...state,
        weather: {
          ...rest,
        },
        city,
        loading: false,
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return initialState;
  }
};

export default base;
