import React, { ReactNode } from "react";
import styled from "styled-components";

const PageTemplateBlock = styled.div`
    display: flex;
    min-height: calc(100vh - 7.3rem);
    min-width: 100%;

    main {
        display: flex;
        margin: auto;
    }
`;

type PageTemplateProps = {
    children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
    return (
        <PageTemplateBlock>
            <main>{children}</main>
        </PageTemplateBlock>
    );
};

export default PageTemplate;
