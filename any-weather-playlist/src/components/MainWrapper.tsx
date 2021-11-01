import React from "react";
import Greetings from "components/Greetings";
import WeatherPresentation from "components/WeatherPresentation";

import SCWidget from "components/SCWidget";
import Clock from "components/Clock";
import styled from "styled-components";

const MainWrapperBlock = styled.div`
  .slide-up {
    animation: slide-up-fade-in ease 2s;
    animation-iteration-count: 1;
    transform-origin: 50% 50%;
    animation-fill-mode: forwards; /*when the spec is finished*/

    -webkit-animation: slide-up-fade-in ease 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-transform-origin: 50% 50%;
    -webkit-animation-fill-mode: forwards; /*Chrome 16+, Safari 4+*/

    -moz-animation: slide-up-fade-in ease 2s;
    -moz-animation-iteration-count: 1;
    -moz-transform-origin: 50% 50%;
    -moz-animation-fill-mode: forwards; /*FF 5+*/

    -ms-animation: slide-up-fade-in ease 2s;
    -ms-animation-iteration-count: 1;
    -ms-transform-origin: 50% 50%;
    -ms-animation-fill-mode: forwards; /*IE 10+*/
  }

  @keyframes slide-up-fade-in {
    0% {
      opacity: 0;
      transform: translate(0px, 10px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @-moz-keyframes slide-up-fade-in {
    0% {
      opacity: 0;
      -moz-transform: translate(0px, 10px);
    }
    100% {
      opacity: 1;
      -moz-transform: translate(0px, 0px);
    }
  }

  @-webkit-keyframes slide-up-fade-in {
    0% {
      opacity: 0;
      -webkit-transform: translate(0px, 10px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(0px, 0px);
    }
  }

  @-ms-keyframes slide-up-fade-in {
    0% {
      opacity: 0;
      -ms-transform: translate(0px, 10px);
    }
    100% {
      opacity: 1;
      -ms-transform: translate(0px, 0px);
    }
  }
`;
type MainWrapperProps = {
  userName: string;
  weather: {
    main: string;
    temp: number;
  };
  message: string;
};

const MainWrapper = ({ userName, weather, message }: MainWrapperProps) => {
  return (
    <MainWrapperBlock>
      <div className="slide-up">
        <Greetings userName={userName} message={message} />
        <Clock />
        <WeatherPresentation weather={weather.main} temp={weather.temp} />
      </div>
      <SCWidget weather={weather.main} />
    </MainWrapperBlock>
  );
};

export default MainWrapper;
