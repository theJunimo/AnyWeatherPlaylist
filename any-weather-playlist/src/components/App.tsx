import React, { useEffect } from "react";
import PageContainer from "containers/PageContainer";
import { useDispatch } from "react-redux";
import { fetchGetWeather } from "stores/modules/base";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetWeather());
  }, [dispatch]);

  return <PageContainer />;
};

export default App;
