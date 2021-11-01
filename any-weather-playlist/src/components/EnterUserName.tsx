import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import media from "../styles/media";
import Flex from "./Flex";
import HiEmoji from "./HiEmoji";
import UserNameInput from "./UserNameInput";

const Content = styled.div`
  display: flex;
  font-size: 2.5rem;
  ${media("tablet")`
    flex-direction: column;
  `};
`;

const EnterUserNameBlock = styled.div`
  display: flex;
  margin: auto 0;
  flex-direction: column;
  font-weight: 600;
`;

const ButtonBlock = styled.button<{ visible?: boolean }>`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  margin-left: 1rem;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

type EnterUserNameProps = {
  onSaveUserName: (userName: string) => void;
};

const EnterUserName = ({ onSaveUserName }: EnterUserNameProps) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [isButtonShowing, setIsButtonShowing] = useState(false);

  const handleSaveUserName = useCallback(() => {
    if (inputEl.current) {
      const userName = inputEl.current.value;
      userName.length > 12 ? onSaveUserName(userName.slice(0, 13)) : onSaveUserName(userName);
    }
  }, [onSaveUserName]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setIsButtonShowing(true);
    } else {
      setIsButtonShowing(false);
    }
  };

  useEffect(() => {
    const handleUserKeyPress = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === "Enter") {
        if (inputEl.current && inputEl.current.value) {
          handleSaveUserName();
        }
      }
    };

    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleSaveUserName]);

  return (
    <EnterUserNameBlock>
      <Content>
        <Flex>
          Hello! <HiEmoji />
        </Flex>
        <Flex>
          <UserNameInput
            autoFocus
            type="text"
            ref={inputEl}
            onChange={handleChangeInput}
            placeholder="stranger :)"
          ></UserNameInput>
          <ButtonBlock visible={isButtonShowing} onClick={handleSaveUserName}>
            <img src="/images/arrows.svg" alt="next-button"></img>
          </ButtonBlock>
        </Flex>
      </Content>
    </EnterUserNameBlock>
  );
};

export default EnterUserName;
