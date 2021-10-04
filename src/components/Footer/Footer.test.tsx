import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer component', () => {
    let footerElement;
    
    beforeEach(() => {
        render(<MemoryRouter><Footer /></MemoryRouter>);
        footerElement = screen.getByTestId('page-footer');
    });

    it('Mounts properly', () => {
        expect(footerElement).toBeInTheDocument();
    });
});
