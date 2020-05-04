import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loader from "./../components/loader";
import FilterBar from "./../components/filter-bar";
import CountriesList from "./../components/countries-list";

const Home = () => {
    const { data, loading } = useSelector((state) => state.countries);
    const isLoading = loading || data.length < 1;

    return (
        <Fragment>
            {isLoading ? (
                <Loader />
            ) : (
                <Fragment>
                    <FilterBar />
                    <CountriesList />
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;
