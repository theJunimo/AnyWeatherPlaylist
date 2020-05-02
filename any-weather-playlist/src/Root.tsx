import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "stores/modules";
import App from "components/App";

let middleware;

if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middleware = composeWithDevTools(applyMiddleware(logger));
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
