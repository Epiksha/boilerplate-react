import React from "react";
import classNames from "classnames";

import { IBaseProps } from "@Types/component.type";

export interface IIconProps extends IBaseProps {
    name: string;
};

export const Icon: React.FC<IIconProps> = ({
    className,
    testId,
    name,
}) => (
    <div
        className={classNames("icon", className)}
        data-testid={testId}
    >
        <svg>
            <use href={`#${name}`} />
        </svg>
    </div>
);

export default Icon;