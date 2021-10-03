import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const headerElement = screen.getByTestId('page-header');

    it('Mounts properly', () => {
        expect(headerElement).toBeInTheDocument();
    });
});
