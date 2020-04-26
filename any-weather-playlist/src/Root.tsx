import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import { default as ReduxThunk } from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "stores/modules";
import App from "components/App";

let middleware;

const pm = createPromise({
    promiseTypeSuffixes: ["LOADING", "SUCCESS", "ERROR"],
});

if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middleware = composeWithDevTools(applyMiddleware(logger, ReduxThunk, pm));
} else {
    middleware = applyMiddleware(ReduxThunk, pm);
}

const store = createStore(rootReducer, middleware);

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

export default Root;
