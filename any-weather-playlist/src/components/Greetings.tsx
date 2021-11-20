import React from "react";
import styled from "styled-components";
import media from "styles/media";
import Flex from "./Flex";
import Span from "./Span";

const GreetingsBlock = styled.div`
  margin: auto;
  margin-top: 2rem;
  font-size: 1.2rem;
  letter-spacing: 2px;

  ${media("tablet")`
            flex-direction: column;        
        `}
`;

interface Props {
  userName: string;
  message: string;
}

const Greetings = ({ userName, message }: Props) => {
  return (
    <GreetingsBlock>
      <Flex>
        <Span>{`${userName},`} &nbsp; </Span>
        <Span>{message}</Span>
      </Flex>
    </GreetingsBlock>
  );
};

export default Greetings;
