import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "stores/modules";

import Header from "components/common/Header";
import ErrorMessage from "components/ErrorMessage";
import MainWrapperContainer from "./MainWrapperContainer";
import PageTemplate from "components/PageTemplate";
import EnterUserNameContainer from "./EnterUserNameContainer";
import LoadingPage from "components/LoadingPage";

const PageContainer = () => {
  const { loading, error, userName } = useSelector((state: RootState) => state.base);

  return (
    <>
      <Header />
      <PageTemplate>
        {loading && <LoadingPage />}
        {error && <ErrorMessage />}
        {!loading && !error && (!userName ? <EnterUserNameContainer /> : <MainWrapperContainer />)}
      </PageTemplate>
    </>
  );
};

export default PageContainer;
