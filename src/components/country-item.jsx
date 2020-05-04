import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { AngleRight } from "@styled-icons/fa-solid";
import css from "./../assets/styles/country-item.module.scss";

const CountryItem = ({ country }) => {
    const { name, population, capital, region, numericCode, flag } = country;
    return (
        <div className={css.container}>
            <div className={css.flagContainer}>
                <img alt='Country Flag' height='160' src={flag} />
            </div>
            <div className={css.informations}>
                <h2 className={css.name}>{parse(name)}</h2>
                <ul className={css.details}>
                    <li>
                        <span className={css.label}>Population: </span>
                        {population}
                    </li>
                    <li>
                        <span className={css.label}>Region: </span>
                        {region}
                    </li>
                    <li>
                        <span className={css.label}>Capital: </span>
                        {capital}
                    </li>
                </ul>
            </div>
            <Link to={`/details/${numericCode}`} className={css.link}>
                <span className={css.linkTxt}>
                    Show details
                    <AngleRight size={14} />
                </span>
            </Link>
        </div>
    );
};

export default CountryItem;
