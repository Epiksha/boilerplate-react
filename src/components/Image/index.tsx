import props from './props';

export const Image = ({
    src,
    id = '',
    alt = '',
    ariaLabelledBy = '',
    ariaLabel = '',
    classes = '',
    external = false,
}: props): JSX.Element => {
    return (
        <img
            id={id}
            src={external ? src : require(`../../assets/images/${src}`)}
            alt={alt ? alt : ''}
            role={alt ? 'img' : 'presentation'}
            className={`image${classes ? ` ${classes}` : ''}`}
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabel}
            data-testid="image"
        />
    );
};

export default Image;