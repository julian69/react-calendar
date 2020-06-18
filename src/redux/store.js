import thunk from 'redux-thunk';
import logger from "redux-logger";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import dates from './reducers/dates';
import reminders from './reducers/reminders';

const middleware = [thunk];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
    middleware.push(logger);
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default createStore(
    combineReducers({
        dates,
        reminders,
    }),
    composeEnhancers(
        applyMiddleware(...middleware),
    ),
);