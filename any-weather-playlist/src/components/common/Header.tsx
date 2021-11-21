import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/modules";
import Flex from "components/Flex";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 0;
  text-align: center;
  font-style: italic;
`;

const P = styled.p`
  margin-bottom: 0;
  text-align: center;
`;

const CityName = styled.span`
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;
`;

const Header = () => {
  const { city } = useSelector((state: RootState) => state.base);
  return (
    <Flex flexDirection="column" padding="1.3rem 0" borderBottom="1px solid #e8e8e8">
      <H1>AnyWeatherPlayList</H1>
      <P>Updated Every Saturday</P>
      {city !== "" && <CityName>📍{city}</CityName>}
    </Flex>
  );
};

export default Header;
