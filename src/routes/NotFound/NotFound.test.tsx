import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NotFound from './';

describe('NotFound component', () => {
    let notFoundElement: HTMLElement;
    
    beforeEach(() => {
        render(<MemoryRouter><NotFound /></MemoryRouter>);
        notFoundElement = screen.getByTestId('notFound');
    });

    it('Mounts properly', () => {
        expect(notFoundElement).toBeInTheDocument();
    });
});
