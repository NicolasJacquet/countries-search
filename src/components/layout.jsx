import React from "react";
import Header from "./header";
import ContentContainer from "./content-container";
import css from "./../assets/styles/layout.module.scss";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <main className={css.content}>
                <ContentContainer>{children}</ContentContainer>
            </main>
        </React.Fragment>
    );
};

export default Layout;
