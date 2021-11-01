import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WeatherPresentationBlock = styled.div`
  margin-top: 1rem;

  .inner-wrapper {
    display: flex;
    justify-content: center;
    .icon {
      margin-right: 1rem;
      display: flex;
      align-items: center;

      img {
        width: 2.813rem;
        height: 2.813rem;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      .type {
        font-size: 1rem;
        letter-spacing: 2px;
      }
      .temp {
        font-size: 2rem;
      }
    }
  }
`;

type WeatherPresentationProps = {
  weather: string;
  temp: number;
};

const WeatherPresentation = ({ weather, temp }: WeatherPresentationProps) => {
  const [iconURL, setIconURL] = useState("/weatherIcon/thermometer.svg");

  useEffect(() => {
    if (["clear sky", "clear"].includes(weather)) {
      setIconURL("/weatherIcon/sunny.svg");
    } else if (weather === "clouds") {
      setIconURL("/weatherIcon/cloud.svg");
    } else if (["shower rain", "rain"].includes(weather)) {
      setIconURL("/weatherIcon/rain.svg");
    } else if (weather === "snow") {
      setIconURL("/weatherIcon/snow.svg");
    } else if (["haze", "dust", "mist"].includes(weather)) {
      setIconURL("/weatherIcon/hazy.svg");
    } else if (weather === "thunderstorm") {
      setIconURL("/weatherIcon/thunderstorm.svg");
    } else {
      setIconURL("/weatherIcon/thermometer.svg");
    }
  }, [weather]);

  return (
    <WeatherPresentationBlock>
      <div className="inner-wrapper">
        <div className="icon">
          <img src={iconURL} alt="weather-icon" />
        </div>
        <div className="content">
          <span className="type">{weather}</span>
          <span className="temp">{temp}°</span>
        </div>
      </div>
    </WeatherPresentationBlock>
  );
};

export default WeatherPresentation;
