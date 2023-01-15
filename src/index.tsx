import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App/App";
import "./scss/entry.scss";

// Imports SVGs so webpack loaders generate spritesheet
const svgs = require.context("./assets/icons/", true, /\.svg$/);
svgs.keys().forEach(svgs);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

document.body.classList.remove("nojs");
