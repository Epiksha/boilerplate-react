import { Link } from 'react-router-dom';

export const Styleguide = (): JSX.Element => {
    return (
        <main
            className="container"
            data-testid="styleguide"
        >
            <Link
                to="/"
                className="inline-block pt-2"
            >
                Home
            </Link>
        </main>
    );
};

export default Styleguide;