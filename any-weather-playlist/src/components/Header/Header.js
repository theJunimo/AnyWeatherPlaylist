import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
    return(
        <header className = { cx('Header')}>
                <h1>
                AnyWeatherPlayList
                </h1>
                <p>Updated Every Saturday</p>
        </header>
    )
}

export default Header;