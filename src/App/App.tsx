import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import routes, { IRoute } from "../libs/routes";

export function _App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                {routes?.map((route: IRoute) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default hot(_App);
