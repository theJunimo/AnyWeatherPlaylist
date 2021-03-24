import styled from 'styled-components';
import media from 'styles/media';

const UserNameInput = styled.input`
  display: flex;
  width: 15rem;
  margin-left: 1rem;
  border-bottom: 2px solid black;
  background-color: #fff;
  font-size: 3rem;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid black;
  outline: none;

  ${media("tablet")`
  margin-left: 0;
  min-height: 3rem;
  `};
`;

export default UserNameInput;

