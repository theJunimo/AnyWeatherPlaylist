import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "stores/modules";
import App from "components/App";
import ReduxThunk from "redux-thunk";

let middleware;

if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middleware = composeWithDevTools(applyMiddleware(ReduxThunk, logger));
} else {
    middleware = composeWithDevTools(applyMiddleware(ReduxThunk));
}

const store = createStore(rootReducer, middleware);

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Root;
