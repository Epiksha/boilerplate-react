export default interface RadiosProps {
    classes?: string;
    groupName: string;
    handler: (index: number) => void;
    radios: {id: string, isToggled: boolean, label: string}[];
};
