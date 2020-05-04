import React from "react";
import { useSelector } from "react-redux";
import { forceCheck } from "react-lazyload";
import REGIONS from "./../utils/regions";
import CountryItem from "./country-item";
import css from "./../assets/styles/countries-list.module.scss";

const highlightMatches = (name, keyword) => {
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
        filters: { searchKeyword, regionFilter },
    } = useSelector((state) => state);

    React.useEffect(() => {
        forceCheck();
    });

    let countries = [];
    const isRegionFilter = regionFilter.length > 0;

    if (searchKeyword || isRegionFilter) {
        const filteredData = data.filter((country) => {
            let isRegion = true;
            let nameIncludeKeyword = true;

            if (searchKeyword) {
                nameIncludeKeyword = country.name
                    .toLowerCase()
                    .includes(searchKeyword.toLowerCase().trim());
                if (!isRegionFilter) {
                    return nameIncludeKeyword;
                }
            }

            if (isRegionFilter) {
                isRegion =
                    country.region &&
                    regionFilter.some(
                        (region) => REGIONS[region] === country.region
                    );
                if (!searchKeyword) {
                    return isRegion;
                }
            }

            return isRegion && nameIncludeKeyword;
        });

        countries = filteredData.map((country) => {
            const updatedCountry = {
                ...country,
                name: highlightMatches(country.name, searchKeyword),
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
