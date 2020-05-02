import {
    SET_COUNTRIES,
    LOADING_DATA,
    SET_ERROR,
} from "./../types/countries-types";

const initialState = {
    data: [],
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
                data: [],
                loading: false,
            };
        case SET_COUNTRIES:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
