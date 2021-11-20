import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "stores/modules";

import Header from "components/common/Header";
import ErrorMessage from "components/ErrorMessage";
import PageTemplate from "components/PageTemplate";
import LoadingPage from "components/LoadingPage";
import MainWrapper from "components/MainWrapper";
import EnterUserName from "components/EnterUserName";

const PageContainer = () => {
  const { loading, error, userName } = useSelector((state: RootState) => state.base);

  return (
    <>
      <Header />
      <PageTemplate>
        {loading && <LoadingPage />}
        {error && <ErrorMessage />}
        {!loading && !error && (!userName ? <EnterUserName /> : <MainWrapper />)}
      </PageTemplate>
    </>
  );
};

export default PageContainer;
