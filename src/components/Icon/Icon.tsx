import IconProps from './Icon.types';

export const Icon = ({ classes, name }: IconProps): JSX.Element => (
    <div
        data-testid="icon"
        className={`icon ${classes ? classes : ''}`}
    >
        <svg>
            <use xlinkHref={`#${name}`} />
        </svg>
    </div>
);

export default Icon;