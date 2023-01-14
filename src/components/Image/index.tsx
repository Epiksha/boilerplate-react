import classNames from "classnames";
import React from "react";

import { IBaseProps } from "@Types/component";

export interface IImageProps extends IBaseProps {
    alt?: string;
    external?: boolean;
    role?: string;
    src: string;
};

export const Image: React.FC<IImageProps> = ({
    alt = "",
    ariaLabelledBy = "",
    ariaLabel = "",
    className,
    external = false,
    id = "",
    src,
    testId,
}) => {
    return (
        <img
            id={id}
            src={external ? src : require(`@Images/${src}`)}
            alt={alt ? alt : ""}
            role={alt ? "img" : "presentation"}
            className={classNames("image", className)}
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabel}
            data-testid={testId}
        />
    );
};

export default Image;