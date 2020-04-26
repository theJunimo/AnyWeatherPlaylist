import React, { useEffect, useRef, useState, useCallback } from "react";
import "./EnterUserName.scss";

type EnterUserNameProps = {
    onSavingUserName: (userName: string) => void;
};

const EnterUserName = ({ onSavingUserName }: EnterUserNameProps) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [showMsg, setShowMsg] = useState(true);

    useEffect(() => {
        const handleUserKeyPress = (e: KeyboardEvent) => {
            const { keyCode } = e;

            if (keyCode === 13) {
                let userName = inputEl?.current?.value;
                if (userName && userName.length > 12) {
                    userName = userName.slice(0, 13);
                    onSavingUserName(userName);
                }
            }
        };

        window.addEventListener("keydown", handleUserKeyPress);

        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [onSavingUserName]);

    const handleMsgClick = useCallback(() => {
        if (inputEl.current && inputEl.current.value) {
            setShowMsg(false);
        } else {
            setShowMsg(true);
        }
    }, []);

    return (
        <div className="EnterUserName">
            <div className="content">
                <p>Welcome,</p>
                <div className="username-div">
                    <div className="username-input">
                        <input autoFocus type="text" ref={inputEl} onChange={handleMsgClick}></input>
                    </div>
                    {showMsg && <span className="guide-msg">please enter your name :)</span>}
                    <span>!</span>
                </div>
            </div>
        </div>
    );
};

export default EnterUserName;
