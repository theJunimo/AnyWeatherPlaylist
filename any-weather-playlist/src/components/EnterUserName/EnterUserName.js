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
              const userName = inputEl.current.value;
              onSavingUserName(userName);
            }
        };

        window.addEventListener('keydown', handleUserKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleUserKeyPress);
        };
      }, [onSavingUserName]);

      useEffect(() => {
          
      })

    return(
        <div className = { cx('EnterUserName') }>
            <div className = { cx('content')}>
                <p>Welcome,</p>
                <div className = { cx('username-div')}>
                <input type = "text" autoFocus ref = { inputEl }></input>
                </div>
                <span>!</span>
            </div>
        </div>
    )
}

export default EnterUserName;