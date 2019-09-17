import React from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import EnterUserNameContainer from 'containers/EnterUserNameContainer';
import MainWrapper from 'components/MainWrapper';

const PageTemplateContainer = () => {
    const { userName } = useSelector(state => state.base);

    return(
        <PageTemplate>
            {!userName? <EnterUserNameContainer/> : <MainWrapper/> }
        </PageTemplate>
    )
}

export default PageTemplateContainer;