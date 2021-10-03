import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import Nav from '../Nav/Nav';

export const Header = (): JSX.Element => {
    const [navItems] = useState([
        { label: '404', url: '/randomroute' },
        { label: 'Styleguide', url: '/styleguide' },
    ]);

    return (
        <header data-testid="page-header" className="header">
            <div className="header__container container">
                <Link className="header__logo" to="/">
                    <Image
                        name="logo.svg"
                        classes="image--header"
                    />
                </Link>
    
                <div className="header__end">
                    <Nav items={navItems} />
                </div>
            </div>
        </header>
    );
};

export default Header;