import ImageProps from './Image.types';

export const Image = ({name, alt = '', classes = '', external = false}: ImageProps): JSX.Element => {
    let importedImage;

    if (!external && name) {
        const imageFiles = require.context('../../assets/images', false, /\.(gif|png|jpe?g|svg)$/);

        // eslint-disable-next-line
        importedImage = imageFiles(imageFiles.keys().filter(image => image.replace('./', '') === name));
    } else {
        importedImage = name;
    }

    return (
        <img
            src={importedImage}
            alt={alt ? alt : ''}
            role={alt ? 'img' : 'presentation'}
            className={`image ${classes ? classes : ''}`}
            data-testid="image"
        />
    );
};

export default Image;