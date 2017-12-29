import { createStore, applyMiddleware } from 'redux';
import config from 'react-global-configuration';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

let middlewares = [
    thunk
]

if (config.get('env') !== 'PROD') {
    middlewares = [...middlewares, logger];
}

export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
