import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItems {
    items: { label: string, url: string }[],
}

export const Nav = ({ items }: MenuItems): JSX.Element => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <nav
            data-testid="page-header-nav"
            className={`nav nav--main${isMenuActive ? ' active' : ''}`}
        >
            <button
                className={`button button--hamburger${isMenuActive ? ' active' : ''}`}
                onClick={() => setIsMenuActive(!isMenuActive)}
                data-testid="page-header-hamburger"
            >
                <span />
                <span />
                <span />
                <span />
            </button>

            <ul
                data-testid="page-header-nav-list"
                className="nav__list"
            >
                {items.map(({ label, url }) => (
                    <li className="nav__item" key={label}>
                        <NavLink
                            className="link nav__link"
                            to={url}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
