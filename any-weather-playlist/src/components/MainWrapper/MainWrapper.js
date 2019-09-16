import React from 'react';
import styles from './MainWrapper';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainWrapper = ({children}) => {
    return(
        <div className = {cx('MainWrapper')}>
            {children}
        </div>
    )
}

export default MainWrapper;