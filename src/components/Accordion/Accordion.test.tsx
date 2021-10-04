import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion component', () => {
    let accordionElement;
    
    beforeEach(() => {
        render(<Accordion title="Test Accordion">Hello there</Accordion>);
        accordionElement = screen.getByTestId('accordion');
    });

    it('Mounts properly', () => {
        expect(accordionElement).toBeInTheDocument();
    });
});
