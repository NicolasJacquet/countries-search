import React from "react";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "@styled-icons/fa-solid";
import css from "./../assets/styles/back-button.module.scss";

const BackButton = () => {
    const history = useHistory();

    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => history.push("/")}>
                <ArrowLeft size={14} className={css.icon} /> Back to home
            </button>
        </div>
    );
};

export default BackButton;
