import {
    SET_COUNTRIES,
    LOADING_DATA,
    SET_ERROR,
} from "./../types/countries-types";
import axios from "axios";

const apiBaseUrl = "https://restcountries.eu/rest/v2/all";

const getCountries = () => async (dispatch) => {
    dispatch({ type: LOADING_DATA });

    try {
        const response = await axios.get(apiBaseUrl);
        dispatch({
            type: SET_COUNTRIES,
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: SET_ERROR,
        });
    }
};

export { getCountries };
