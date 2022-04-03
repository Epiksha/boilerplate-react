import Icon from '../Icon';

export const Spinner = (): JSX.Element => (
    <div
        data-testid="spinner"
        className="spinner"
    >
        <Icon
            name="icon-spinner"
            classes="icon--spinner"
        />
    </div>
);

export default Spinner;