import React from "react";

import Icon from "../Icon";

export const Spinner: React.FC = () => (
    <div
        data-testid="spinner"
        className="spinner"
    >
        <Icon
            name="icon-spinner"
            className="icon--spinner"
        />
    </div>
);

export default Spinner;