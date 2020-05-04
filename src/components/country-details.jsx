import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./../assets/styles/country-details.module.scss";

const CountryDetails = () => {
    const {
        countries: { data },
    } = useSelector((state) => state);
    const { countryId } = useParams();

    const country = data.filter(
        (country) => country.alpha3Code === countryId
    )[0];

    if (!country) {
        return null;
    }

    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = country;

    const detailsInformations = [
        { label: "Native Name", value: nativeName },
        { label: "Population", value: population },
        { label: "Region", value: region },
        { label: "Sub Region", value: subregion },
        { label: "Capital", value: capital },
        { label: "Top Level Domain", value: topLevelDomain },
        { label: "Currencies", value: currencies },
        { label: "Languages", value: languages },
    ];

    const borderCountries = data.filter((country) =>
        borders.includes(country.alpha3Code)
    );

    return (
        <div className={css.container}>
            <div className={css.flagContainer}>
                <img src={flag} alt='' />
            </div>
            <div className={css.infoContainer}>
                <div>
                    <h2 className={css.name}>{name}</h2>
                </div>
                <div className={css.listContainer}>
                    <ul className={css.infoList}>
                        {detailsInformations.map((item, i) => {
                            const { label, value } = item;
                            return (
                                <li key={label} className={css.infoListItem}>
                                    <span className={css.label}>{label}:</span>{" "}
                                    {["string", "number"].includes(typeof value)
                                        ? typeof value === "number"
                                            ? new Intl.NumberFormat().format(
                                                  value
                                              )
                                            : value
                                        : value.map((valueItem, i) => {
                                              if (valueItem.name) {
                                                  return i + 1 < value.length
                                                      ? `${valueItem.name}, `
                                                      : valueItem.name;
                                              }
                                              return valueItem;
                                          })}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {borderCountries.length > 0 && (
                    <div className={css.borderCountriesContainer}>
                        <h3 className={css.borderCountriesTitle}>
                            Border countries:
                        </h3>
                        {borderCountries.map((country) => {
                            return (
                                <Link
                                    to={`/details/${country.alpha3Code}`}
                                    key={country.alpha3Code}
                                    className={css.borderCountryLink}
                                >
                                    {country.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountryDetails;
