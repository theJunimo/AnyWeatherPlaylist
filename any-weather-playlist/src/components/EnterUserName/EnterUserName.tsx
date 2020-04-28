import React, { useEffect, useRef, useState } from "react";
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
                if (inputEl.current && inputEl.current.value) {
                    const userName = inputEl.current.value;
                    userName.length > 12 ? onSavingUserName(userName.slice(0, 13)) : onSavingUserName(userName);
                }
            }
        };

        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [onSavingUserName]);

    const handleMsgClick = () => {
        if (inputEl.current && inputEl.current.value) {
            setShowMsg(false);
        } else {
            setShowMsg(true);
        }
    };

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
