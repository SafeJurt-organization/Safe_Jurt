import React from 'react';
import classes from './Header.module.scss';
import safeLogo from '../../assets/images/safejurt-logo.png';
import profile from '../../assets/images/profile.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.header__logo}>
                    <img src={safeLogo} alt="Logo" />
                </div>
                <nav className={classes.header__nav}>
                    <ul className={classes.menu}>
                        <li className={classes.menu__item}>
                            <Link className={classes.menu__link} to="/service">Служебная помощь</Link>
                        </li>
                        <li className={classes.menu__item}>
                            <Link className={classes.menu__link} to="/map">Карта</Link>
                        </li>
                        <li className={classes.menu__item}>
                            <Link className={classes.menu__link} to="/schedule">График дня</Link>
                        </li>
                    </ul>
                </nav>
                <div className={classes.header__profile}>
                    <img src={profile} alt="Profile" />
                </div>
            </header>
        </div>
    );
}
