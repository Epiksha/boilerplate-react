import React from "react";

import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
// Append import here

export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export default [
  { path: "/", element: <HomePage /> },
  // Append configuration here
  { path: "*", element: <NotFoundPage /> },
] as IRoute[];