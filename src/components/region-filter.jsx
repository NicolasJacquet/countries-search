import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { setRegionFilter } from "./../redux/actions/filters-actions";
import { AngleDown, AngleUp, Check } from "@styled-icons/fa-solid";
import REGIONS from "./../utils/regions";
import useOnClickOutside from "./../effects/use-on-click-outside";
import css from "./../assets/styles/region-filter.module.scss";

const RegionFilter = ({ regionFilter, setRegionFilter }) => {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    useOnClickOutside(ref, () => setOpen(false));

    const handleClick = (region) => {
        if (!regionFilter.some((current) => current === region)) {
            setRegionFilter([...regionFilter, region]);
        } else {
            let selectionAfterRemoval = regionFilter;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                (current) => current !== region
            );
            setRegionFilter([...selectionAfterRemoval]);
        }
    };

    const isItemInSelection = (region) => {
        if (regionFilter.some((current) => current === region)) {
            return true;
        }
        return false;
    };

    const Icon = open ? AngleUp : AngleDown;

    return (
        <div className={css.container} ref={ref}>
            <div
                tabIndex={0}
                className={css.toggle}
                role='button'
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <p className={css.text}>
                    Filter by Region{" "}
                    {regionFilter.length > 0 && `(${regionFilter.length})`}
                </p>
                <Icon size={20} />
            </div>
            {open && (
                <ul className={css.list}>
                    {Object.entries(REGIONS).map((item) => (
                        <li className={css.listItem} key={item[0]}>
                            <button
                                type='button'
                                onClick={() => handleClick(item[0])}
                            >
                                <span>{item[1]}</span>
                                <span>
                                    {isItemInSelection(item[0]) && (
                                        <Check size={14} />
                                    )}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    regionFilter: state.filters.regionFilter,
});

const mapDispatchToProps = (dispatch) => ({
    setRegionFilter: (regions) => dispatch(setRegionFilter(regions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegionFilter);
