import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image component', () => {
    let imageElement: Element;
    
    beforeEach(() => {
        render(<Image name="react.png" />);

        imageElement = screen.getByTestId('image');
    });

    it('Mounts properly', () => {
        expect(imageElement).toBeInTheDocument();
    });
});
