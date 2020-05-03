import { SET_SEARCH_KEYWORD } from "./../types/filters-types";

export const setSearchKeyword = (keyword) => {
    return {
        type: SET_SEARCH_KEYWORD,
        payload: keyword,
    };
};
