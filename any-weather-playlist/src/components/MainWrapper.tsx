import React from "react";
import Greetings from "components/Greetings";
import WeatherPresentation from "components/WeatherPresentation";

import SCWidget from "components/SCWidget";
import Clock from "components/Clock";
import Flex from "./Flex";
import SlideUpAnimation from "./SlideUpAnimation";
import { useSelector } from "react-redux";
import { RootState } from "stores/modules";
import { getMessageByWeather } from "lib/utils";

const MainWrapper = () => {
  const { userName, weather } = useSelector((state: RootState) => state.base);
  return (
    <Flex flexDirection="column">
      <SlideUpAnimation>
        <Flex flexDirection="column" justifyContent="center">
          <Greetings userName={userName} message={getMessageByWeather(weather)} />
          <Clock />
          <WeatherPresentation weather={weather.main} temp={weather.temp} />
        </Flex>
      </SlideUpAnimation>
      <SCWidget weather={weather.main} />
    </Flex>
  );
};

export default MainWrapper;
