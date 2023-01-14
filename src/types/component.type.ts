export interface IBaseProps {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children?: JSX.Element[] | JSX.Element | string;
  className?: string|string[];
  id?: string;
  testId?: string;
};