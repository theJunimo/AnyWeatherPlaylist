import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClockBlock = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 2px;

  .colon {
    margin: 0 0.5rem;
    font-size: 2rem;
    animation: blink 2s step-start 0s infinite;
    -webkit-animation: blink 2s step-start 0s infinite;
    -moz-animation: blink 2s step-start 0s infinite;
    -ms-animation: blink 2s step-start 0s infinite;

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }

    @-moz-keyframes blink {
      50% {
        opacity: 0;
      }
    }

    @-webkit-keyframes blink {
      50% {
        opacity: 0;
      }
    }

    @-ms-keyframes blink {
      50% {
        opacity: 0;
      }
    }
  }
`;

const Clock = () => {
  const [hh, setHour] = useState("0");
  const [mm, setMin] = useState("0");

  useEffect(() => {
    const getTime = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();
      const trimmedHH = `${hour > 9 ? hour : `0${hour}`}`;
      const trimmedMM = `${min > 9 ? min : `0${min}`}`;

      setHour(trimmedHH);
      setMin(trimmedMM);
    }, 1000);

    return () => clearInterval(getTime);
  }, []);

  return (
    <ClockBlock>
      <span>{hh}</span>
      <span className="colon">:</span>
      <span>{mm}</span>
    </ClockBlock>
  );
};

export default Clock;
