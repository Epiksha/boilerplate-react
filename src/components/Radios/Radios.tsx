import RadiosProps from './Radios.types';

export const Radios = ({
    classes,
    groupName,
    handler,
    radios
}: RadiosProps): JSX.Element => (
    <form
        className={`radios ${classes ? classes : ''}`}
        data-testid="radios"
    >
        {radios?.map((radio, index) => (
            <label
                key={radio.label}
                className="radio"
            >
                <input
                    id={radio.id}
                    value={radio.label}
                    type="radio"
                    name={groupName}
                    className="input input--radio"
                    onChange={() => handler(index)}
                    aria-labelledby={`${radio.id}-label`}
                />

                <div className="radio__circle"></div>
                
                <span
                    id={`${radio.id}-label`}
                    className="radio__text"
                >
                    {radio.label}
                </span>
            </label>
        ))}
    </form>
);

export default Radios;