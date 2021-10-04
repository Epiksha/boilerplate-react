import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
    let checkboxElement;
    
    beforeEach(() => {
        render(<Checkbox handler={() => {}} />);
        checkboxElement = screen.getByTestId('checkbox');
    });

    it('Mounts properly', () => {
        expect(checkboxElement).toBeInTheDocument();
    });
});
