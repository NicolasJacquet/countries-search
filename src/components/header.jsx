import React from "react";
import { useLocation, Link } from "react-router-dom";
import ThemeSwitcher from "./theme-switcher";
import ContentContainer from "./content-container";
import css from "./../assets/styles/header.module.scss";

const Header = () => {
    const currentLocation = useLocation();
    const Title = () => <h1 className={css.title}>Where in the world?</h1>;

    return (
        <header className={css.header}>
            <ContentContainer className={css.contentContainer}>
                {currentLocation.pathname !== "/" ? (
                    <Link to='/' className={css.link}>
                        <Title />
                    </Link>
                ) : (
                    <Title />
                )}
                <ThemeSwitcher />
            </ContentContainer>
        </header>
    );
};

export default Header;
