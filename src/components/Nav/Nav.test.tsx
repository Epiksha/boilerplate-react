import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
    const items = [
        { label: 'Test One', url: '/testone' },
        { label: 'Test Two', url: '/testtwo' },
    ];

    const { getByText } = render(<BrowserRouter><Nav items={items} /></BrowserRouter>);
    const NavElement = screen.getByTestId('page-header-nav');

    it('Mounts properly', () => {
        expect(NavElement).toBeInTheDocument();
    });
    
    items.forEach(({ label }) => {
        it(`Navigation item '${label}' gets mounted`, () => {
            expect(getByText(label)).toBeInTheDocument();
        });
    });
});
