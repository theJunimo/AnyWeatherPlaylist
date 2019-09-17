import React, { useEffect, useRef } from 'react';
import styles from './EnterUserName.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EnterUserName = ({onSavingUserName}) => {
    const inputEl = useRef(null);

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

    return(
        <div className = { cx('EnterUserName') }>
            <div className = { cx('content')}>
                <p>Welcome,</p>
                <div className = { cx('username-div')}>
                  <div className = { cx('username-input')}>
                  <input type = "text" autoFocus ref = { inputEl }></input>
                  </div>
                  <span>!</span>
                </div>
            </div>
        </div>
    )
}

export default EnterUserName;