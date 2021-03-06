import React from "react";
import { connect } from "react-redux";
import { setSearchKeyword } from "./../redux/actions/filters-actions";
import { Search } from "@styled-icons/fa-solid";
import { TimesCircle } from "@styled-icons/fa-regular";
import css from "./../assets/styles/search-input.module.scss";

const trimString = (str) => {
    if (!str) return str;
    return str.replace(/^\s+/g, "").replace(/  +/g, " ");
};

const SearchInput = ({ searchKeyword, setSearchKeyword }) => {
    const isSearchKeyword = searchKeyword.length > 0;
    const updateKeyword = (value) => {
        const trimedValue = trimString(value);
        if (trimedValue.length > 0 || isSearchKeyword) {
            setSearchKeyword(trimedValue);
        }
    };

    const handleChange = (e) => {
        updateKeyword(e.currentTarget.value);
    };

    const handleClickRemove = () => {
        updateKeyword("");
    };

    return (
        <div className={css.container}>
            <Search size={20} className={css.icon} />
            <input
                type='text'
                placeholder='Search for a country...'
                className={css.field}
                value={searchKeyword}
                onChange={handleChange}
                onBlur={(e) => setSearchKeyword(e.currentTarget.value.trim())}
            />
            {isSearchKeyword && (
                <button
                    className={css.removeKeywordBtn}
                    onClick={handleClickRemove}
                >
                    <TimesCircle size={20} />
                </button>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    searchKeyword: state.filters.searchKeyword,
});

const mapDispatchToProps = (dispatch) => ({
    setSearchKeyword: (keyword) => dispatch(setSearchKeyword(keyword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
