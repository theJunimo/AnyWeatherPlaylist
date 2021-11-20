import styled from "styled-components";

const Flex = styled.div<{
  flexDirection?: string;
  padding?: string;
  borderBottom?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.borderBottom};
  justify-content: ${(props) => props.justifyContent};
`;

export default Flex;
