import { SWITCH_THEME } from "./../types/theme-types";

export default (state = false, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return !state;
        default:
            return state;
    }
};
