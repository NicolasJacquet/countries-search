import React from "react";
import { useHistory } from "react-router-dom";
import css from "./../assets/styles/back-button.module.scss";

const BackButton = () => {
    const history = useHistory();

    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => history.goBack()}>
                Back
            </button>
        </div>
    );
};

export default BackButton;
