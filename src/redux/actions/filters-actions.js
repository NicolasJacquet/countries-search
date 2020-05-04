import {
    SET_SEARCH_KEYWORD,
    SET_REGION_FILTER,
} from "./../types/filters-types";

export const setSearchKeyword = (keyword) => {
    return {
        type: SET_SEARCH_KEYWORD,
        payload: keyword,
    };
};

export const setRegionFilter = (regions) => {
    return {
        type: SET_REGION_FILTER,
        payload: regions,
    };
};
