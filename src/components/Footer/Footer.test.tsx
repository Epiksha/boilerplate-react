import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer component', () => {
    render(<BrowserRouter><Footer /></BrowserRouter>);
    const footerElement = screen.getByTestId('page-footer');

    it('Mounts properly', () => {
        expect(footerElement).toBeInTheDocument();
    });
});
