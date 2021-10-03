import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
    let items;
    let NavElement;
    let navList;

    beforeEach(() => {
        items = [
            { label: 'Test One', url: '/testone' },
            { label: 'Test Two', url: '/testtwo' },
        ];

        render(<MemoryRouter><Nav items={items} /></MemoryRouter>);
        NavElement = screen.getByTestId('page-header-nav');

        navList = within(NavElement).queryByTestId('page-header-nav__list');
    })

    it('Mounts properly', () => {
        expect(NavElement).toBeInTheDocument();
    });

    it(`Navigation item 'Test One' gets mounted`, () => {
        const item = within(navList).queryByText('Test One');

        expect(item).toBeDefined();
    });

    it(`Navigation item 'Test Two' gets mounted`, () => {
        const item = within(navList).queryByText('Test Two');

        expect(item).toBeDefined();
    });
});
