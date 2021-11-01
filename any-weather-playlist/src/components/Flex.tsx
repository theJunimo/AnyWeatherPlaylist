import styled from "styled-components";

const Flex = styled.div<{ flexDirection?: string; padding?: string; borderBottom?: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.borderBottom};
`;

export default Flex;
