import React from "react";
import { Spinner, CircleNotch } from "@styled-icons/fa-solid";
import css from "./../assets/styles/loader.module.scss";

const Loader = () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <Spinner size={34} className={css.icon} />
                <p className={css.text}>Loading...</p>
            </div>
        </div>
    );
};

export default Loader;
