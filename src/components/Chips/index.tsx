import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { IBaseProps, IOption } from "@Types/component";

export interface IChipsProps extends IBaseProps {
    onChange(option: IOption): void;
    options: IOption[];
}

const Chips: React.FC<IChipsProps> = ({
    className,
    onChange,
    options,
    testId,
}) => {
    const handleClick = (value: string) => {
        const option = options.find(option => option.value === value);

        onChange(option as IOption);
    };

    return (
        <ul
            className="chips"
            data-testid={testId}
        >
            {options.map(option => (
                <li className="chips__item" key={option.value}>
                    <button
                        className={classNames("chips__button", { "chips__button--active": option.isSelected })}
                        onClick={() => handleClick(option.value)}
                    >
                        {option.label}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Chips;