export default interface RangeProps {
    ariaLabel?: string,
    ariaLabelledBy?: string,
    classes?: string,
    handler(rangeValue: number): unknown,
    id?: string,
    max?: number,
    min?: number,
    step?: number,
    value: number,
};
