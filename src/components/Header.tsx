import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

export default (): JSX.Element => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <header className="header">
            <div className="header__container container">
                <Link className="header__logo" to="/">
                    <Image
                        name="logo.svg"
                        classes="image--header"
                    />
                </Link>
    
                <div className="header__end">
                    <button
                        className={`${isMenuActive ? 'active' : ''} button button--hamburger`}
                        onClick={() => setIsMenuActive(!isMenuActive)}
                    >
                        <span />
                        <span />
                        <span />
                        <span />
                    </button>
    
                    <nav className={`${isMenuActive ? 'active' : ''} nav nav--main`}>
                        <ul className="list list--nav list--clear">
                            <li className="nav__item">
                                <Link className="nav__link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
