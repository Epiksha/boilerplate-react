import React from "react";
import classNames from "classnames";

import { IBaseProps } from "@Types/component";
import generateId from "@Utilities/generateId";
import Icon from "@Components/Icon";
import useCopyToClipboard from "@Hooks/useCopyToClipboard";

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

    const { handleCopy } = useCopyToClipboard();

    const copyToClipboard = async () => {
        handleCopy(hex);
    };

    return (
        <div
            className={classNames("swatch", className)}
            data-testid={testId}
        >
            <div className="swatch__preview" style={{ backgroundColor: hex }} aria-labelledBy={id ?? generatedId}>
                <button
                    className="swatch__copy"
                    onClick={copyToClipboard}
                    aria-label="Copy to clipboard"
                >
                    <span>{hex}</span>

                    <Icon name="copy" className="icon--swatch" />
                </button>
            </div>

            <label className="swatch__description" id={id ?? generatedId}>
                <p className="swatch__label swatch__label--main">{name}</p>

                <p className="swatch__label"><strong>Hex:</strong> {hex}</p>

                <p className="swatch__label"><strong>Variable:</strong> {varReference}</p>
            </label>
        </div>
    );
};

export default Swatch;