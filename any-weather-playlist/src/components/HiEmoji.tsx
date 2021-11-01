import React from "react";
import styled from "styled-components";

interface Props {
  fontSize?: string;
}

const Emoji = styled.span<Props>`
  font-size: ${(props) => props.fontSize};
  margin: 0 0 0 10px;
  display: inline-block;
  transform-origin: 70% 70%;
  animation: wave 1.8s infinite;
  -webkit-animation: wave 1.8s infinite;
  -moz-animation: wave 1.8s infinite;
  -ms-animation: wave 1.8s infinite;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(-10deg);
    }

    20% {
      transform: rotate(12deg);
    }

    30% {
      transform: rotate(-10deg);
    }

    40% {
      transform: rotate(9deg);
    }

    50% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @-webkit-keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(-10deg);
    }

    20% {
      transform: rotate(12deg);
    }

    30% {
      transform: rotate(-10deg);
    }

    40% {
      transform: rotate(9deg);
    }

    50% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @-moz-keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(-10deg);
    }

    20% {
      transform: rotate(12deg);
    }

    30% {
      transform: rotate(-10deg);
    }

    40% {
      transform: rotate(9deg);
    }

    50% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @-ms-keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(-10deg);
    }

    20% {
      transform: rotate(12deg);
    }

    30% {
      transform: rotate(-10deg);
    }

    40% {
      transform: rotate(9deg);
    }

    50% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

const HiEmoji = (props: Props) => {
  return <Emoji {...props}>👋</Emoji>;
};

export default HiEmoji;
