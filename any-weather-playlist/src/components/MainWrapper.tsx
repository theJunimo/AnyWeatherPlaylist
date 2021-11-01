import React from "react";
import Greetings from "components/Greetings";
import WeatherPresentation from "components/WeatherPresentation";

import SCWidget from "components/SCWidget";
import Clock from "components/Clock";
import Flex from "./Flex";
import SlideUpAnimation from "./SlideUpAnimation";
interface Props {
  userName: string;
  weather: {
    main: string;
    temp: number;
  };
  message: string;
}

const MainWrapper = ({ userName, weather, message }: Props) => {
  return (
    <Flex flexDirection="column">
      <SlideUpAnimation>
        <Greetings userName={userName} message={message} />
        <Clock />
        <WeatherPresentation weather={weather.main} temp={weather.temp} />
      </SlideUpAnimation>
      <SCWidget weather={weather.main} />
    </Flex>
  );
};

export default MainWrapper;
