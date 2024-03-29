import classNames from "classnames";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import { IBaseProps } from "@Types/component";

export interface IRangeProps extends IBaseProps {
    onChange: (value: number) => void,
    max?: number,
    min?: number,
    step?: number,
    value: number,
};

export const Range: React.FC<IRangeProps> = ({
    ariaLabel,
    ariaLabelledBy,
    className,
    onChange,
    id,
    max = 100,
    min = 0,
    step = 0.1,
    testId,
    value,
}) => {
    const [backgroundImage, setBackgroundImage] = useState("");
    const sliderRef = useRef(null);

    const buildGradient = () => {
        const slider = ((sliderRef.current as unknown) as HTMLInputElement);
        const gradient = window.getComputedStyle(slider).backgroundImage.toString();
        const colors: string[] = [];

        gradient
            .replace(/^.*?linear-gradient *\((.+)/, (substring: string): string => {
                return (substring.match(/rgb *\([^)]+\)/g) as unknown) as string;
            })
            .split("),").forEach(color => {
                const newColor = color[color.length - 1] !== ")" ? `${color})` : color;

                if (colors.indexOf(newColor as never) === -1) {
                    colors.push(newColor as never);
                }
            });

        setBackgroundImage(`linear-gradient(
            to right,
            ${colors[0]} ${-100 + value}% ${value}%,
            ${colors[1]} ${value}% ${100 + value}%
        )`)
    };

    useEffect(() => {
        const rangeValue = Number(((sliderRef.current as unknown) as HTMLInputElement).value);
        onChange(rangeValue);

        buildGradient();
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    return (
        <input
            className={classNames("range", className)}
            type="range"
            ref={sliderRef}
            id={id}
            value={value}
            min={min}
            max={max}
            step={step}
            style={{ backgroundImage: backgroundImage }}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            data-testid={testId}
            onChange={handleChange}
        />
    );
};

export default Range;