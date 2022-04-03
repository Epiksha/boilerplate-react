import { render, screen } from '@testing-library/react';
import Range from './';

describe('range component', () => {
    let rangeElement: Element;
    
    beforeEach(() => {
        render(<Range value={50} handler={() => {}} />);

        rangeElement = screen.getByTestId('range');
    });

    it('Mounts properly', () => {
        expect(rangeElement).toBeInTheDocument();
    });
});
