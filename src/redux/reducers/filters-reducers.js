import { SET_SEARCH_KEYWORD } from "./../types/filters-types";

const initialState = {
    searchKeyword: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_KEYWORD:
            return {
                ...state,
                searchKeyword: action.payload,
            };
        default:
            return state;
    }
};
