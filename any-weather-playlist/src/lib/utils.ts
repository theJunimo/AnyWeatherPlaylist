const getWeatherIcon = (weather: string) => {
  if (["clear sky", "clear"].includes(weather)) {
    return "/weatherIcon/sunny.svg";
  } else if (weather === "clouds") {
    return "/weatherIcon/cloud.svg";
  } else if (["shower rain", "rain"].includes(weather)) {
    return "/weatherIcon/rain.svg";
  } else if (weather === "snow") {
    return "/weatherIcon/snow.svg";
  } else if (["haze", "dust", "mist"].includes(weather)) {
    return "/weatherIcon/hazy.svg";
  } else if (weather === "thunderstorm") {
    return "/weatherIcon/thunderstorm.svg";
  } else {
    return "/weatherIcon/thermometer.svg";
  }
};

const getMessageByWeather = (weather: string) => {
  if (["clear sky", "clear"].includes(weather)) {
    return "What a nice day!";
  } else if (["clouds", "few clouds", "scattered clouds", "broken clouds"].includes(weather)) {
    return "Everybody else shares the same cloudy sky.";
  } else if (["shower rain", "rain", "thunderstorm"].includes(weather)) {
    return "Stay dry";
  } else if (weather === "snow") {
    return "HOORAY for Snow Days!";
  } else {
    return "Today's weather is...¯\\_(ツ)_/¯";
  }
};
export { getWeatherIcon, getMessageByWeather };
