import Flex from "components/Flex";
import React from "react";
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

const Header = () => {
  return (
    <Flex flexDirection="column" padding="1.3rem 0" borderBottom="1px solid #e8e8e8">
      <H1>AnyWeatherPlayList</H1>
      <P>Updated Every Saturday</P>
    </Flex>
  );
};

export default Header;
