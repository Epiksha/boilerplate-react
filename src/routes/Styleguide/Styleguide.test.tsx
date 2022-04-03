import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Styleguide from './';

describe('Styleguide component', () => {
    let styleguideElement: HTMLElement;
    
    beforeEach(() => {
        render(<MemoryRouter><Styleguide /></MemoryRouter>);
        
        styleguideElement = screen.getByTestId('styleguide');
    });

    it('Mounts properly', () => {
        expect(styleguideElement).toBeInTheDocument();
    });
});
