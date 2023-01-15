import React from "react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    return (
        <main>
            <h1>Boilerplate</h1>

            <Link to="styleguide">Styleguide</Link>
        </main>
    );
};

export default HomePage;