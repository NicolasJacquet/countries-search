import React from "react";
import { connect } from "react-redux";
import { getCountries } from "./../redux/actions/countries-actions";
import { RedoAlt } from "@styled-icons/fa-solid";
import css from "./../assets/styles/error.module.scss";

const Error = ({ getCountries }) => {
    const handleClick = () => {
        getCountries();
    };

    return (
        <div className={css.container}>
            <div className={css.content}>
                <h2 className={css.title}>Sorry</h2>
                <p className={css.text}>
                    An error has occurred, please try reloading.
                </p>
                <button className={css.reloadBtn} onClick={handleClick}>
                    <RedoAlt size={16} className={css.icon} />
                    Reload
                </button>
            </div>
        </div>
    );
};

export default connect(null, { getCountries })(Error);
