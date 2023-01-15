import React, { ChangeEvent } from "react";
import classNames from "classnames";

import { IBaseProps } from "@Types/component";
import { Heading } from "@Types/typography";
import generateId from "@Utilities/generateId";

export interface IRadio extends IBaseProps {
    id: string;
    isDisabled?: boolean;
    isSelected: boolean;
    label: string;
}

export interface IRadiosProps extends IBaseProps {
    defaultId: string;
    group: string;
    headingType?: `${Heading}`;
    isDisabled?: boolean;
    label?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    radios: IRadio[];
}

const Radios: React.FC<IRadiosProps> = ({
    className,
    group,
    headingType: HeadingTag = Heading.Three,
    isDisabled = false,
    label,
    onChange,
    radios,
    testId,
}) => {
    return (
        <div
            className={classNames("radios", className)}
            data-testid={testId}
        >
            {label ? <HeadingTag>{label}</HeadingTag> : null}

            <fieldset className="radios__inner">
                {radios.map(radio => (
                    <label
                        className={classNames("radio", radio.className, { "radio--disabled": isDisabled || radio.isDisabled })}
                        data-testid={radio.testId}
                        htmlFor={radio.id}
                        key={generateId()}
                    >
                        <input
                            type="radio"
                            name={group}
                            id={radio.id}
                            onChange={onChange}
                            disabled={isDisabled || radio.isDisabled}
                            checked={radio.isSelected}
                        />

                        {radio.label ? (
                            <span className="radio__label">
                                {radio.label}
                            </span>
                        ) : null}
                    </label>
                ))}
            </fieldset>
        </div>
    );
};

export default Radios;