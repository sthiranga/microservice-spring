import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './_reducers/index';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(createLogger(), thunk);

export const store = createStore(rootReducer,middleware);

console.log(store.getState());