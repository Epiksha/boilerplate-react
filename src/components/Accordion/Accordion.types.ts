import { ReactNode } from 'react';

export default interface AccordionProps {
    iconType?: string;
    iconPosition?: string;
    title: string;
    children: ReactNode,
};
