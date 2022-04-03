import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from './';

describe('Home component', () => {
    let homeElement: HTMLElement;
    
    beforeEach(() => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        homeElement = screen.getByTestId('home');
    });

    it('Mounts properly', () => {
        expect(homeElement).toBeInTheDocument();
    });
});
