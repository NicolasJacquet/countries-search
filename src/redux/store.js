import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import themeReducer from "./reducers/theme-reducers";
import countriesReducer from "./reducers/countries-reducers";
import filtersReducer from "./reducers/filters-reducers";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    filters: filtersReducer,
});

export default createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.navigator.userAgent.includes("Chrome") &&
            process.env.NODE_ENV === "development"
            ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
                  window.__REDUX_DEVTOOLS_EXTENSION__()
            : compose
    )
);
