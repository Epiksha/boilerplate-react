import React, { ChangeEvent } from "react";
import classNames from "classnames";

import { IBaseProps } from "@Types/component";
import Icon from "@Components/Icon";

export interface ICheckboxProps extends IBaseProps {
    id: string;
    isDisabled?: boolean;
    isSelected: boolean;
    label?: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
    className,
    id,
    isDisabled = false,
    isSelected,
    label,
    name,
    onChange,
    testId,
}) => {
    return (
        <div
            data-testid={testId}
            className={classNames("checkbox", className, { "checkbox--disabled": isDisabled })}
        >
            <label className="checkbox__label" htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    checked={isSelected}
                    name={name}
                    onChange={onChange}
                    disabled={isDisabled}
                />

                <div className="checkbox__inner">
                    <Icon name="checkmark" className="icon--checkbox" />
                </div>

                {label ? (
                    <span className="checkbox__label-text">
                        {label}
                    </span>
                ) : null}
            </label>
        </div>
    );
};

export default Checkbox;