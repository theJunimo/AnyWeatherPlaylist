import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className = { cx('PageTemplate')}>
            <main>
                {children}
            </main>
        </div>
    )
};

export default PageTemplate;