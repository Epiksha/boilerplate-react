import { render, screen } from '@testing-library/react';
import Radios from './Radios';
import RadiosProps from './Radios.types';

describe('Radios component', () => {
    let radiosElement: HTMLElement;
    let radiosProps: RadiosProps;

    beforeEach(() => {
        radiosProps = {
            groupName: 'Test Radios',
            handler: () => {},
            radios: [
                { id: 'test-radio-1', isToggled: true, label: 'Test Radio 1' },
                { id: 'test-radio-2', isToggled: false, label: 'Test Radio 2' },
            ],
        };

        render(<Radios {...radiosProps} />);

        radiosElement = screen.getByTestId('radios');
    });

    it('Mounts properly', () => {
        expect(radiosElement).toBeInTheDocument();
    });
});
