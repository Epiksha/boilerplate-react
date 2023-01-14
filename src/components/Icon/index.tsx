import React from "react";
import classNames from "classnames";

import { IBaseProps } from "../../types/component.type";

export interface IIconProps extends IBaseProps {
    name: string;
};

export const Icon: React.FC<IIconProps> = ({
    className,
    name,
}) => (
    <div
        className={classNames("icon", className)}
        data-testid="icon"
    >
        <svg>
            <use href={`#${name}`} />
        </svg>
    </div>
);

export default Icon;