import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import Nav from '../Nav/Nav';

export const Footer = (): JSX.Element => {
    const [navItems] = useState([
        { label: 'Contact', url: '/contact' },
        { label: 'Styleguide', url: '/styleguide' },
    ]);

    return (
        <footer data-testid="page-footer" className="footer">
            <div className="footer__container container">
                <Link className="footer__logo" to="/">
                    <Image
                        name="logo.svg"
                        classes="image--footer"
                    />
                </Link>
    
                <div className="footer__end">
                    <Nav items={navItems} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;