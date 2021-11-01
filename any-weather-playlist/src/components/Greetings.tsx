import React from "react";
import styled from "styled-components";
import media from "styles/media";

const GreetingsBlock = styled.div`
  margin: auto;
  margin-top: 2rem;
  font-size: 1.2rem;
  letter-spacing: 2px;

  .content {
    display: flex;
    justify-content: center;

    span {
      text-align: center;
    }

    ${media("tablet")`
            flex-direction: column;        
        `}
  }
`;

type propsType = {
  userName: string;
  message: string;
};

const Greetings = ({ userName, message }: propsType) => {
  return (
    <GreetingsBlock>
      <div className="content">
        <span>{`${userName},`} &nbsp; </span>
        <span>{message}</span>
      </div>
    </GreetingsBlock>
  );
};

export default Greetings;
