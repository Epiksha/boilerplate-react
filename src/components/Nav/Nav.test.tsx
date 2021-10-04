import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {
    let items: { label: string, url: string }[];
    let navElement: HTMLElement;
    let navList: HTMLUListElement;
    let hamburgerMenu: HTMLButtonElement;

    beforeEach(() => {
        items = [
            { label: 'Test One', url: '/testone' },
            { label: 'Test Two', url: '/testtwo' },
        ];

        render(<MemoryRouter><Nav items={items} /></MemoryRouter>);

        navElement = screen.getByTestId('page-header-nav');
        navList = within(navElement).queryByTestId('page-header-nav-list') as HTMLUListElement;
        hamburgerMenu = within(navElement).queryByTestId('page-header-hamburger') as HTMLButtonElement;
    });

    it('Mounts properly', () => {
        expect(navElement).toBeInTheDocument();
    });

    it(`Navigation item 'Test One' is found`, () => {
        const item = within(navElement).queryByText('Test One');

        expect(item).toBeDefined();
    });

    it(`Navigation item 'Test Two' is found`, () => {
        const item = within(navElement).queryByText('Test Two');

        expect(item).toBeDefined();
    });
});
