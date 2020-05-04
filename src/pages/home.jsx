import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loader from "./../components/loader";
import Error from "./../components/error";
import FilterBar from "./../components/filter-bar";
import CountriesList from "./../components/countries-list";

const Home = () => {
    const { data, loading, error } = useSelector((state) => state.countries);
    const isLoading = loading || data.length < 1;

    if (error) {
        return <Error />;
    }

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
