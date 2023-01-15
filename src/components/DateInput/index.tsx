import React, { useState } from "react";
import classNames from "classnames";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";

import { IBaseProps } from "@Types/component";
import Icon from "@Components/Icon";

export interface IDateInputProps extends IBaseProps {
    onChange(date: any): void;
    value: any;
}

const DateInput: React.FC<IDateInputProps> = ({
    className,
    id,
    onChange,
    testId,
    value,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleCalendarOpen = () => {
        setIsFocused(true);
    };

    const handleCalendarClose = () => {
        setIsFocused(false);
    };

    const handleChange = (date: Date) => {
        onChange(date);
    };
    return (
        <div
            id={id}
            className={classNames("date-input", className, { "date-input--focused": isFocused })}
            data-testid={testId}
        >
            <Icon
                name="calendar"
                className="icon--date"
            />

            <DatePicker
                selected={dayjs(value).toDate()}
                onChange={handleChange}
                onCalendarOpen={handleCalendarOpen}
                onCalendarClose={handleCalendarClose}
                dateFormat="dd MMMM yyyy"
            />
        </div>
    );
};

export default DateInput;