import React from "react";
import { useSelector } from "react-redux";
import CountryItem from "./country-item";
import css from "./../assets/styles/countries-list.module.scss";

const CountriesList = () => {
    const { data } = useSelector((state) => state.countries);

    const countries = data.map((country) => {
        return <CountryItem country={country} key={country.name} />;
    });

    return <div className={css.container}>{countries}</div>;
};

export default CountriesList;
