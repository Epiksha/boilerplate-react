export default interface InputProps {
    autoComplete?: string;
    classes?: string;
    errors?: string[];
    handler: (value: string|number) => void;
    id?: string;
    isActive?: boolean;
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
};
