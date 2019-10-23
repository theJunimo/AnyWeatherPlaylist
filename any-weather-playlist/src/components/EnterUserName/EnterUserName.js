import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './EnterUserName.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EnterUserName = ({onSavingUserName}) => {
    const inputEl = useRef(null);
    const [showMsg, setShowMsg] = useState(true);

    useEffect(() => {
      const handleUserKeyPress = (event) => {
          const { keyCode } = event;
      
          if (keyCode === 13) {
            let userName = inputEl.current.value;
            if(userName.length > 12) {
              userName = userName.slice(0, 13); 
            }
            onSavingUserName(userName);
          }
      };

      window.addEventListener('keydown', handleUserKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleUserKeyPress);
      };
    }, [onSavingUserName]);

    const handleMsgClick = useCallback(() => {
      if(inputEl.current.value) {
        setShowMsg(false);
      } else {
        setShowMsg(true);
      }
    }, []);

    return(
        <div className = { cx('EnterUserName') }>
            <div className = { cx('content')}>
                <p>Welcome,</p>
                <div className = { cx('username-div')}>
                  <div className = { cx('username-input')}>
                  <input autoFocus type = "text"  ref = { inputEl } onChange = { handleMsgClick }></input>
                  </div>
                  {showMsg && <span className = { cx('guide-msg')}>please enter your name :)</span>}
                  <span>!</span>
                </div>
            </div>
        </div>
    )
}

export default EnterUserName;