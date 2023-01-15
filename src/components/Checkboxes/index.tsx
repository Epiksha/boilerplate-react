import React, { ChangeEvent } from "react";
import classNames from "classnames";

import Checkbox, { ICheckboxProps } from "./Checkbox";
import generateId from "@Utilities/generateId";
import { Heading } from "@Types/typography";
import { IBaseProps } from "@Types/component";

export interface ICheckboxesProps extends IBaseProps {
    checkboxes: Omit<ICheckboxProps, "onChange">[];
    label?: string;
    headingType?: `${Heading}`;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkboxes: React.FC<ICheckboxesProps> = ({
    checkboxes,
    className,
    headingType: HeadingTag = Heading.Three,
    label,
    onChange,
    testId,
}) => {
    return (
        <div
            className={classNames("checkboxes", className)}
            data-testid={testId}
        >
            {label ? <HeadingTag>{label}</HeadingTag> : null}

            <ul className="checkboxes__list">
                {checkboxes?.length && checkboxes.map(checkbox => (
                    <Checkbox
                        {...checkbox}
                        key={checkbox.id ?? generateId()}
                        onChange={onChange}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Checkboxes;