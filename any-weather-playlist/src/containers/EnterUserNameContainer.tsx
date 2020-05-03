import React from "react";
import { useDispatch } from "react-redux";
import EnterUserName from "components/EnterUserName";
import { saveUserName } from "stores/modules/base";

const EnterUserNameContainer = () => {
    const dispatch = useDispatch();
    const handleSavingUserName = (userName: string) => dispatch(saveUserName(userName));

    return <EnterUserName onSavingUserName={handleSavingUserName} />;
};

export default EnterUserNameContainer;
