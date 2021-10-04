export default interface CheckboxProps {
    classes?: string;
    handler: (isChecked: boolean) => void;
    label?: string|number;
};
