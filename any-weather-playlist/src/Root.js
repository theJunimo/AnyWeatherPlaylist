import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as modules from 'stores/modules';

import { createLogger } from 'redux-logger';
import { default as ReduxThunk } from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

const logger = createLogger();
const pm = createPromise({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
});
const reducers = combineReducers(modules);

const store = createStore(reducers, applyMiddleware(logger, ReduxThunk, pm));

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