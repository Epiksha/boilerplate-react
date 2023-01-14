import classNames from "classnames";
import React from "react";

import { IBaseProps } from "@Types/component.type";
import Icon from "../Icon";

export const Spinner: React.FC<IBaseProps> = ({
    className,
    testId,
}) => (
    <div
        data-testid={testId}
        className={classNames("spinner", className)}
    >
        <Icon
            name="icon-spinner"
            className="icon--spinner"
        />
    </div>
);

export default Spinner;