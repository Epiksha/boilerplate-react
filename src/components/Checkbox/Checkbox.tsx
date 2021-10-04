import { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import CheckboxProps from './Checkbox.types';

export const Checkbox = ({ handler, label = '', classes = '' }: CheckboxProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => handler(isChecked), [isChecked]);

    return (
        <label
            data-testid="checkbox"
            className={`checkbox ${classes ? classes : ''}`}
        >
            <input
                type="checkbox"
                checked={isChecked}
                className="input input--checkbox"
                onChange={() => setIsChecked((isChecked: boolean) => !isChecked)}
            />
    
            <div className="checkbox__icon">
                <div>
                    <Icon
                        classes="icon--checkbox"
                        name="icon-tick"
                    />
                </div>
            </div>
    
            {label && <span className="checkbox__text">{label}</span>}
        </label>
    );
};

export default Checkbox;