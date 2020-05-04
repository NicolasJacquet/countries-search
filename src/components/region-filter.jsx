import React, { useState, useRef } from "react";
import { AngleDown, AngleUp, Check } from "@styled-icons/fa-solid";
import REGIONS from "./../utils/regions";
import useOnClickOutside from "./../effects/use-on-click-outside";
import css from "./../assets/styles/region-filter.module.scss";

const RegionFilter = () => {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    useOnClickOutside(ref, () => setOpen(false));

    const handleClick = (region) => {
        if (!selection.some((current) => current.id === region.id)) {
            setSelection([...selection, region]);
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                (current) => current.id !== region.id
            );
            setSelection([...selectionAfterRemoval]);
        }
    };

    const isItemInSelection = (region) => {
        if (selection.some((current) => current.id === region.id)) {
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
                    {selection.length > 0 && `(${selection.length})`}
                </p>
                <Icon size={20} />
            </div>
            {open && (
                <ul className={css.list}>
                    {REGIONS.map((item) => (
                        <li className={css.listItem} key={item.id}>
                            <button
                                type='button'
                                onClick={() => handleClick(item)}
                            >
                                <span>{item.value}</span>
                                <span>
                                    {isItemInSelection(item) && (
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

export default RegionFilter;
