import styled from "styled-components";
import media from "styles/media";

const UserNameInput = styled.input`
  display: flex;
  max-width: 15rem;
  margin-left: 1rem;
  border-bottom: 2px solid black;
  background-color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
  border: none;
  outline: none;

  ::placeholder {
    color: dee2e6;
  }

  ${media("tablet")`
  margin-left: 0;
  min-height: 3rem;
  `};
`;

export default UserNameInput;
