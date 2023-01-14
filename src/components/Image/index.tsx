import React from "react";

import { IBaseProps } from "../../types/component.type";

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
}) => {
    return (
        <img
            id={id}
            src={external ? src : require(`../../assets/images/${src}`)}
            alt={alt ? alt : ""}
            role={alt ? "img" : "presentation"}
            className={`image${className ? ` ${className}` : ""}`}
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabel}
            data-testid="image"
        />
    );
};

export default Image;