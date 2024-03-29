import {createStore , applyMiddleware , compose } from 'redux';
import { connectRouter , routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import createReducer from './index';

export const history = createBrowserHistory();



const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(
    connectRouter(history)(createReducer(store.asyncReducers))
  );
}

const store = createStore(
  connectRouter(history)(createReducer()),
  initialState,
  composedEnhancers
);
store.asyncReducers = {};

export default store;

