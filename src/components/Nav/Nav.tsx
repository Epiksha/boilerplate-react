import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            >
                <span />
                <span />
                <span />
                <span />
            </button>

            <ul className="nav__list" data-testid="page-header-nav__list">
                {items.map(({ label, url }) => (
                    <li className="nav__item" key={label}>
                        <Link
                            className="nav__link"
                            to={url}
                            data-testid={`nav-item-${label.toLowerCase()}`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
