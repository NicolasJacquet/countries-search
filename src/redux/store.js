import { createStore, combineReducers } from "redux";
import themeReducer from "./reducers/theme-reducers";

const initialState = {};

const reducers = combineReducers({
    theme: themeReducer,
});

export default createStore(reducers, initialState);
