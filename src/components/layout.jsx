import React from "react";
import Header from "./header";
import "./../assets/styles/layout.scss";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    );
};

export default Layout;
