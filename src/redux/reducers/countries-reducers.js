import {
    SET_COUNTRIES,
    LOADING_DATA,
    SET_ERROR,
} from "./../types/countries-types";

const initialState = {
    countries: [],
    loading: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true,
            };
        case SET_ERROR:
            return {
                ...state,
                countries: [],
                loading: false,
            };
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
