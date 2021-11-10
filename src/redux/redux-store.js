import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import appReducer from './reducer-app.js';
import thunkMiddleware from 'redux-thunk';

let redusers = combineReducers({
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;