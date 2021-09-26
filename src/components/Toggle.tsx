import React from 'react';

interface ToggleProps {
    classes?: string;
    isChecked: boolean;
    label?: string;
    handleToggle: () => void;
}

export const Toggle = ({ classes = '', isChecked, label, handleToggle }: ToggleProps): JSX.Element => (
    <label className={`toggle ${classes}`}>
        {label && <span className="toggle__text">{label}</span>}

        <input
            type="checkbox"
            checked={isChecked}
            className="input input--toggle"
            aria-checked={isChecked}
            role="switch"
            onChange={() => handleToggle()}
        />

        <div className="toggle__container">
            <div className="toggle__handle"></div>
        </div>
    </label>
);

export default Toggle;