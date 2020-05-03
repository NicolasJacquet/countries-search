import React from "react";
import SearchInput from "./search-input";
import RegionFilter from "./region-filter";
import css from "./../assets/styles/filter-bar.module.scss";

const FilterBar = () => {
    return (
        <div className={css.container}>
            <SearchInput />
            <RegionFilter />
        </div>
    );
};

export default FilterBar;
