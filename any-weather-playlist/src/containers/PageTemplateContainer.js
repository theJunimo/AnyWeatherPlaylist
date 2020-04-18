import React from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import EnterUserNameContainer from 'containers/EnterUserNameContainer';
import MainWrapper from 'components/MainWrapper';
import ErrorMessage from 'components/ErrorMessage';

const PageTemplateContainer = () => {
    const { userName, error } = useSelector(state => state.base);

    return(
        <PageTemplate>
            {error? <ErrorMessage/> : !userName? <EnterUserNameContainer/> : <MainWrapper/> }
        </PageTemplate>
    )
}

export default PageTemplateContainer;