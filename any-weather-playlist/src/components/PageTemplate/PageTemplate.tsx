import React, { ReactNode } from 'react';
import './PageTemplate.scss';

type PageTemplateProps = {
    children: ReactNode
}

const PageTemplate = ({children} :PageTemplateProps) => {
    return (
        <div className = 'PageTemplate'>
            <main>
                {children}
            </main>
        </div>
    )
};

export default PageTemplate;