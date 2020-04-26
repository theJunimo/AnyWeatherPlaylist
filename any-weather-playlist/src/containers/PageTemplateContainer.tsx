import React from "react";
import { useSelector } from "react-redux";
import PageTemplate from "components/PageTemplate";

import MainWrapper from "components/MainWrapper";

import EnterUserNameContainer from "./EnterUserNameContainer";
import ErrorMessage from "components/ErrorMessage";
import { RootState } from "stores/modules";

const PageTemplateContainer = () => {
    const { userName, error } = useSelector((state: RootState) => state.base);

    return (
        <PageTemplate>
            {error ? <ErrorMessage /> : !userName ? <EnterUserNameContainer /> : <MainWrapper />}
        </PageTemplate>
    );
};

export default PageTemplateContainer;
