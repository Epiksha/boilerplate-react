import { render, screen } from '@testing-library/react';
import Plus from './Plus';

describe('Input component', () => {
    let plusElement;

    beforeEach(() => {
        render(<Plus />);

        plusElement = screen.getByTestId('plus');
    });

    it('Mounts properly', () => {
        expect(plusElement).toBeInTheDocument();
    });
});
