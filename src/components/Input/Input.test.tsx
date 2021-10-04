import { render, screen } from '@testing-library/react';
import Input from './Input';
import InputProps from './Input.types';

describe('Input component', () => {
    let inputElement: HTMLElement;
    let inputProps: InputProps;

    beforeEach(() => {
        inputProps = { value: 'Test', handler: () => {} };
        
        render(<Input {...inputProps} />);
        inputElement = screen.getByTestId('input');
    });

    it('Mounts properly', () => {
        expect(inputElement).toBeInTheDocument();
    });
});
