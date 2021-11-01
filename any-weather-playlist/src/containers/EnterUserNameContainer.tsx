import React from "react";
import { useDispatch } from "react-redux";

import { saveUserName } from "stores/modules/base";
import EnterUserName from "components/EnterUserName";

const EnterUserNameContainer = () => {
  const dispatch = useDispatch();
  const handleSavingUserName = (userName: string) => dispatch(saveUserName(userName));

  return <EnterUserName onSaveUserName={handleSavingUserName} />;
};

export default EnterUserNameContainer;
