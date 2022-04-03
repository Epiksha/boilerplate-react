import props from './props';

export const Icon = ({ classes, name }: props): JSX.Element => (
    <div
        data-testid="icon"
        className={`icon${classes ? ` ${classes}` : ''}`}
    >
        <svg>
            <use href={`#${name}`} />
        </svg>
    </div>
);

export default Icon;