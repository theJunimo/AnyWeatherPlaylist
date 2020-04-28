import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "stores/modules";
import ErrorMessage from "components/ErrorMessage";
import PageTemplate from "components/PageTemplate";
import EnterUserNameContainer from "./EnterUserNameContainer";
import MainWrapperContainer from "./MainWrapperContainer";

const PageTemplateContainer = () => {
    const { error, userName } = useSelector((state: RootState) => state.base);

    return (
        <PageTemplate>
            {error ? <ErrorMessage /> : !userName ? <EnterUserNameContainer /> : <MainWrapperContainer />}
        </PageTemplate>
    );
};

export default PageTemplateContainer;
