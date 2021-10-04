import { render, screen } from '@testing-library/react';
import Slider from './Slider';
import SliderProps from './Slider.types';

describe('Slider component', () => {
    let sliderElement: HTMLElement;
    let sliderProps: SliderProps;

    beforeEach(() => {
        sliderProps = { value: 0, handler: () => {} };
        
        render(<Slider {...sliderProps} />);
        sliderElement = screen.getByTestId('slider');
    });

    it('Mounts properly', () => {
        expect(sliderElement).toBeInTheDocument();
    });
});
