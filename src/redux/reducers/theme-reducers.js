import { SWITCH_THEME } from "./../types/theme-types";

export default (isDark = true, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return !isDark;
        default:
            return isDark;
    }
};
