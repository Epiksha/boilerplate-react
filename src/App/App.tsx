import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import routes, { IRoute } from "../libs/routes";
import { enableTranslations } from "@Config/translations";

enableTranslations();

export function _App(): JSX.Element {
    return (
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <Routes>
                    {routes?.map((route: IRoute) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
            </I18nextProvider>
        </BrowserRouter>
    );
}

export default hot(_App);
