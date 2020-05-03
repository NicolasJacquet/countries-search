import React, { Fragment } from "react";
import FilterBar from "./../components/filter-bar";
import CountriesList from "./../components/countries-list";

const Home = () => {
    return (
        <Fragment>
            <FilterBar />
            <CountriesList />
        </Fragment>
    );
};

export default Home;
