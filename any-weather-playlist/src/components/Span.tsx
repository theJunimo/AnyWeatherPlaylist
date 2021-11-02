import styled from "styled-components";

const Span = styled.span<{ fontSize?: string; letterSpacing?: string; textAlign?: string }>`
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.textAlign};
`;

export default Span;
