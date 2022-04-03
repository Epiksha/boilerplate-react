import { render, screen } from '@testing-library/react';
import Spinner from './';

describe('Spinner component', () => {
    let spinnerElement: HTMLElement;

    beforeEach(() => {
        render(<Spinner />);

        spinnerElement = screen.getByTestId('spinner');
    });

    it('Mounts properly', () => {
        expect(spinnerElement).toBeInTheDocument();
    });
});
