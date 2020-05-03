import React from "react";
import { useSelector } from "react-redux";
import CountryItem from "./country-item";
import css from "./../assets/styles/countries-list.module.scss";

const highlightMatchesInString = (name, keyword) => {
    const regex = new RegExp(keyword.trim(), "i");
    if (!name.match(regex)) {
        return name;
    }
    const matchStartPosition = name.match(regex).index;
    const matchEndPosition =
        matchStartPosition + name.match(regex)[0].toString().length;
    const originalTextFoundByRegex = name.substring(
        matchStartPosition,
        matchEndPosition
    );

    return name.replace(regex, `<mark>${originalTextFoundByRegex}</mark>`);
};

const CountriesList = () => {
    const {
        countries: { data },
        filters: { searchKeyword },
    } = useSelector((state) => state);

    let countries = [];

    if (searchKeyword) {
        const filteredData = data.filter((country) => {
            return country.name
                .toLowerCase()
                .includes(searchKeyword.toLowerCase().trim());
        });

        countries = filteredData.map((country) => {
            const updatedCountry = {
                ...country,
                name: highlightMatchesInString(country.name, searchKeyword),
            };
            return <CountryItem country={updatedCountry} key={country.name} />;
        });
    } else {
        countries = data.map((country) => (
            <CountryItem country={country} key={country.name} />
        ));
    }

    return <div className={css.container}>{countries}</div>;
};

export default CountriesList;
