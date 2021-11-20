import { getWeatherIcon } from "lib/utils";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flex from "./Flex";

const Icon = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;

  > img {
    width: 2.813rem;
    height: 2.813rem;
  }
`;

const Span = styled.span<{ fontSize?: string; letterSpacing?: string }>`
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing};
`;

const Wrapper = styled.div`
  margin-top: 1rem;
`;

interface Props {
  weather: string;
  temp: number;
}

const WeatherPresentation = ({ weather, temp }: Props) => {
  return (
    <Wrapper>
      <Flex>
        <Icon>
          <img src={getWeatherIcon(weather)} alt="weather-icon" />
        </Icon>
        <Flex flexDirection="column">
          <Span fontSize="1rem" letterSpacing="2px">
            {weather}
          </Span>
          <Span fontSize="2rem">{temp}°</Span>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default WeatherPresentation;
