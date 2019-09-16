import React from 'react';
import { useSelector } from 'react-redux';
import MainWrapper from 'components/MainWrapper';
import Greetings from 'components/Greetings';

const MainWrapperContainer = () => {
    const { userName } = useSelector(state => state.base, []);

    return (
        <MainWrapper>
            <Greetings userName = { userName } />
        </MainWrapper>
    )
}

export default MainWrapperContainer;