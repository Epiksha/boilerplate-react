import React, { useEffect, useState } from 'react';
import SliderProps from './Slider.types';

export const Slider = ({
    classes,
    max = 100,
    min = 0,
    handler,
    step = 1,
    value = 0
}: SliderProps): JSX.Element => {
    const [trackSize, setTrackSize] = useState(((+value - min) * 100) / (max - min));

    useEffect(() => {
        setTrackSize(((+value - min) * 100) / (max - min));
    }, [value, min, max]);

    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            className={`input input--range ${classes ? classes : ''}`}
            onInput={({ target }: React.ChangeEvent<HTMLInputElement>) => handler(parseInt(target.value))}
            style={{backgroundSize: `${trackSize}% 100%`}}
            data-testid="slider"
        />
    );
};

export default Slider;