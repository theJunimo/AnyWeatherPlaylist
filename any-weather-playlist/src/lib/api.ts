import axios from "axios";

// google cloud platform 키 만료
// export const getLatLngAPI = () =>
//     axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GEOLOCATION_API}`);

export const getWeatherAPI = (position?: { latitude: number; longitude: number }) => {
  if (position === undefined) {
    return axios.get(
      //위치정보 사용 거부 시 서울 날씨 가져오도록 수정
      `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.REACT_APP_WEATHER_API}`,
    );
  } else {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&APPID=${process.env.REACT_APP_WEATHER_API}`,
    );
  }
};

export const getSoundCloudURL = (weather: string) => {
  let playlist;
  if (["clear sky", "clear"].includes(weather)) {
    playlist = 871183640;
  } else if (["shower rain", "rain", "thunderstorm"].includes(weather)) {
    playlist = 871190231;
  } else if (weather === "snow") {
    playlist = 871195301;
  } else {
    playlist = 871176140;
  }
  return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlist}&color=%23000000&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true`;
};
