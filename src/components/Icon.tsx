interface IconProps {
    classes?: string;
    name: string;
}

export const Icon = ({ classes, name }: IconProps): JSX.Element => (
    <div className={`icon ${classes ? classes : ''}`}>
        <svg>
            <use xlinkHref={`#${name}`} />
        </svg>
    </div>
);

export default Icon;