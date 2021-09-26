import React from 'react';

interface IconProps {
    classes?: string;
    name: string;
};

export default ({ classes, name }: IconProps): JSX.Element => (
    <div className={`icon ${classes ? classes : ''}`}>
        <svg>
            <use xlinkHref={`#${name}`} />
        </svg>
    </div>
);
