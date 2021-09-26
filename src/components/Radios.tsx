import React from 'react';

interface RadiosProps {
    classes?: string;
    groupName: string;
    handler: (index: number) => void;
    radios: {id: string, isToggled: boolean, label: string}[];
};

export default ({ classes, groupName, handler, radios }: RadiosProps): JSX.Element => (
    <form className={`radios ${classes ? classes : ''}`}>
        {radios?.map((radio, index) => {
            <label
                key={radio.label}
                className="radio"
            >
                <input
                    id={radio.id}
                    value={radio.label}
                    type="radio"
                    name={groupName}
                    className="input input--radio"
                    onChange={() => handler(index)}
                    aria-labelledBy={`${radio.id}-label`}
                />

                <div className="radio__circle"></div>
                
                <span
                    id={`${radio.id}-label`}
                    className="radio__text"
                >
                    {radio.label}
                </span>
            </label>
        })}
    </form>
);
