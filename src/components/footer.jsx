import React from "react";
import iconGithub from "./../assets/images/icon-github.svg";
import css from "./../assets/styles/footer.module.scss";

const Footer = () => {
    return (
        <footer className={css.footerContainer}>
            <a
                href='https://github.com/NicolasJacquet/countries-search'
                target='_blank'
                rel='noopener noreferrer'
                className={css.link}
            >
                View the source code of this website on Github.{" "}
                <img src={iconGithub} alt='Github' className={css.icon} />
            </a>
        </footer>
    );
};

export default Footer;
