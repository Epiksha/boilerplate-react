import ToggleProps from './Toggle.types';

export const Toggle = ({ classes = '', isChecked, label, handler }: ToggleProps): JSX.Element => (
    <label
        className={`toggle ${classes}`}
        data-testid="toggle"
    >
        {label && <span className="toggle__text">{label}</span>}

        <input
            type="checkbox"
            checked={isChecked}
            className="input input--toggle"
            aria-checked={isChecked}
            role="switch"
            onChange={() => handler()}
        />

        <div className="toggle__container">
            <div className="toggle__handle"></div>
        </div>
    </label>
);

export default Toggle;