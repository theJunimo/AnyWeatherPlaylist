import React from "react";
import styled from "styled-components";

const Flex = styled.div<{ flexDirection?: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

export default Flex;
