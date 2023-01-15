import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const HomePage: React.FC = () => {
    const { t } = useTranslation("home");

    return (
        <main>
            <h1>{t("title")}</h1>

            <Link to="styleguide">Styleguide</Link>
        </main>
    );
};

export default HomePage;