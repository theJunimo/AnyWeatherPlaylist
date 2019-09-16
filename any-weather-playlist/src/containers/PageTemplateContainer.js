import React from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from 'components/PageTemplate';
import EnterUserNameContainer from 'containers/EnterUserNameContainer';
import MainWrapperContainer from 'containers/MainWrapperContainer';

const PageTemplateContainer = () => {
    const { userName } = useSelector(state => state.base, []);

    return(
        <PageTemplate>
            {!userName? <EnterUserNameContainer/> : <MainWrapperContainer/> }
        </PageTemplate>
    )
}

export default PageTemplateContainer;