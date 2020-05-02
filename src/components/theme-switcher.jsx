import React from "react";
import { connect } from "react-redux";
import { switchTheme } from "./../redux/actions/theme-actions";
import { Moon as MoonLine } from "@styled-icons/fa-regular";
import { Moon as MoonSolid } from "@styled-icons/fa-solid";
import css from "./../assets/styles/theme-switcher.module.scss";

const ThemeSwitcher = ({ isDark, switchTheme }) => {
    const Icon = isDark ? MoonSolid : MoonLine;

    React.useEffect(() => {
        if (isDark) {
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
        }
    });

    return (
        <button className={css.switcher} onClick={() => switchTheme()}>
            <Icon size={16} className={css.icon} />
            Dark Mode
        </button>
    );
};

const mapStateToProps = (state) => ({
    isDark: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
    switchTheme: () => dispatch(switchTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
