import axios from "axios";

export const getLatLngAPI = () =>
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GEOLOCATION_API}`);
export const getWeatherAPI = (lat, lon) =>
    axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_API}`,
    );
