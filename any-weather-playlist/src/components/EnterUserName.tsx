import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import media from "../styles/media";

const EnterUserNameBlock = styled.div`
    display: flex;
    margin: auto 0;
    flex-direction: column;
    font-weight: 600;

    .content {
        display: flex;
        font-size: 3rem;

        ${media("tablet")`
        flex-direction: column;
        `};

        p,
        span {
            margin: auto;
        }

        .username-div {
            position: relative;
            display: flex;

            ${media("tablet")`
                margin-top: 1rem;
        `};

            .username-input {
                display: flex;
                width: 15rem;
                margin-left: 1rem;
                padding: 0 1rem;
                padding-bottom: 0;
                border-bottom: 2px solid black;
                background-color: #f1f3f5;
                font-size: 2rem;
                font-weight: 600;
                border: none;
                border-radius: 5px;
                outline: none;

                ${media("tablet")`
                margin-left: 0;
                min-height: 3rem;
                `};
            }

            .guide-msg {
                position: absolute;
                color: #adb5bd;
                font-size: 0.9rem;
                bottom: -1.5rem;
                left: 2rem;
                letter-spacing: 1px;

                ${media("tablet")`
                    left: 0;
                `};
            }
        }
    }
`;

const ButtonBlock = styled.button<{ visible: boolean }>`
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    margin-left: 1rem;
    border: none;
    background-color: none;
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
    const [showMsg, setShowMsg] = useState(true);

    const handleSaveUserName = useCallback(() => {
        if (inputEl.current) {
            const userName = inputEl.current.value;
            userName.length > 12 ? onSaveUserName(userName.slice(0, 13)) : onSaveUserName(userName);
        }
    }, [onSaveUserName]);

    const handleMsgClick = () => {
        if (inputEl.current && inputEl.current.value) {
            setShowMsg(false);
        } else {
            setShowMsg(true);
        }
    };

    useEffect(() => {
        const handleUserKeyPress = (e: KeyboardEvent) => {
            const { keyCode } = e;
            if (keyCode === 13) {
                if (inputEl.current && inputEl.current.value) {
                    handleSaveUserName();
                }
            }
        };

        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [onSaveUserName, handleSaveUserName]);

    return (
        <EnterUserNameBlock>
            <div className="content">
                <p>Welcome,</p>
                <div className="username-div">
                    <input
                        className="username-input"
                        autoFocus
                        type="text"
                        ref={inputEl}
                        onChange={handleMsgClick}
                    ></input>
                    {showMsg && <span className="guide-msg">please enter your name :)</span>}
                    <ButtonBlock visible={!showMsg} onClick={handleSaveUserName}>
                        <img src="/images/arrows.svg" alt="next-button"></img>
                    </ButtonBlock>
                </div>
            </div>
        </EnterUserNameBlock>
    );
};

export default EnterUserName;
