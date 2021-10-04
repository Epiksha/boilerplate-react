import { render, screen } from '@testing-library/react';
import Toggle from './Toggle';
import ToggleProps from './Toggle.types';

describe('Toggle component', () => {
    let toggleElement: HTMLElement;
    let toggleProps: ToggleProps;

    beforeEach(() => {
        toggleProps = { isChecked: false, handler: () => {} };
        
        render(<Toggle {...toggleProps} />);
        toggleElement = screen.getByTestId('toggle');
    });

    it('Mounts properly', () => {
        expect(toggleElement).toBeInTheDocument();
    });
});
