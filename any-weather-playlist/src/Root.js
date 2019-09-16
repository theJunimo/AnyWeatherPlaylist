import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as modules from 'stores/modules';

import { createLogger } from 'redux-logger';

const logger = createLogger();
const reducers = combineReducers(modules);
const store = createStore(reducers, applyMiddleware(logger));

const Root = () => {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
}

export default Root;