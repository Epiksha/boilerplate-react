import { useEffect, useState } from 'react';
import Icon from './Icon';

interface CheckboxProps {
    classes?: string;
    handler: (isChecked: boolean) => void;
    label?: string;
}

export const Checkbox = ({ classes, handler, label = '' }: CheckboxProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        handler(isChecked);
    }, [isChecked])

    return (
        <label className={`checkbox ${classes ? classes : ''}`}>
            <input
                type="checkbox"
                checked={isChecked}
                className="input input--checkbox"
                onChange={() => setIsChecked(value => !value)}
            />
    
            <div className="checkbox__icon">
                <div>
                    <Icon
                        classes="icon--checkbox"
                        name="icon-tick"
                    />
                </div>
            </div>
    
            {label && (
                <span
                    className="checkbox__text"
                    v-text="label"
                >{{label}}</span>
            )}
        </label>
    );
};

export default Checkbox;