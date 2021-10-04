import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const headerElement = screen.getByTestId('page-header');

    it('Mounts properly', () => {
        expect(headerElement).toBeInTheDocument();
    });
});
