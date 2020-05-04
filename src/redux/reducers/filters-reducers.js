import {
    SET_SEARCH_KEYWORD,
    SET_REGION_FILTER,
} from "./../types/filters-types";

const initialState = {
    searchKeyword: "",
    regionFilter: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_KEYWORD:
            return {
                ...state,
                searchKeyword: action.payload,
            };
        case SET_REGION_FILTER:
            return {
                ...state,
                regionFilter: action.payload,
            };
        default:
            return state;
    }
};
