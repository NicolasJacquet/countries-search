import React from "react";
import ThemeSwitcher from "./theme-switcher";
import ContentContainer from "./content-container";
import css from "./../assets/styles/header.module.scss";

const Header = () => {
    return (
        <header className={css.header}>
            <ContentContainer className={css.contentContainer}>
                <h1 className={css.title}>Where in the world?</h1>
                <ThemeSwitcher />
            </ContentContainer>
        </header>
    );
};

export default Header;
