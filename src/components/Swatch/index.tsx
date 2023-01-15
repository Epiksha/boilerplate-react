import React from "react";
import classNames from "classnames";

import { IBaseProps } from "@Types/component";
import generateId from "@Utilities/generateId";

export interface ISwatchProps extends IBaseProps {
    hex: string;
    varReference: string;
    name: string;
}

const Swatch: React.FC<ISwatchProps> = ({
    className,
    hex,
    id,
    name,
    testId,
    varReference,
}) => {
    const generatedId = generateId();

    return (
        <div
            className={classNames("swatch", className)}
            data-testid={testId}
        >
            <div className="swatch__preview" style={{ backgroundColor: hex }} aria-labelledBy={id ?? generatedId}></div>

            <label className="swatch__description" id={id ?? generatedId}>
                <p className="swatch__label swatch__label--main">{name}</p>

                <p className="swatch__label"><strong>Hex:</strong> {hex}</p>

                <p className="swatch__label"><strong>Variable:</strong> {varReference}</p>
            </label>
        </div>
    );
};

export default Swatch;