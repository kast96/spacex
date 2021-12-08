import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import appReducer from './reducer-app.js';
import thunkMiddleware from 'redux-thunk';
import rocketsReducer from './reducer-rockets.js';
import rocketReducer from './reducer-rocket.js';

let redusers = combineReducers({
    app: appReducer,
    rockets: rocketsReducer,
    rocket: rocketReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;