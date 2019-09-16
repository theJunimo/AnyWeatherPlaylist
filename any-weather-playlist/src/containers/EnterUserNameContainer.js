import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import EnterUserName from 'components/EnterUserName';

const EnterUserNameContainer = () => {
    const dispatch = useDispatch();

    const onSavingUserName = useCallback(
        (userName) => dispatch({type: 'base/SAVE_USERNAME', userName}),
        [dispatch]
    )

    return(
        <EnterUserName
            onSavingUserName = { onSavingUserName }/>
    )
}

export default EnterUserNameContainer;