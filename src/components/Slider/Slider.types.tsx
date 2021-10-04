export default interface SliderProps {
    classes?: string;
    max?: number;
    min?: number;
    handler: (value: number) => void;
    step?: number;
    value: number;
};
