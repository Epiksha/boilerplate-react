import { Link } from 'react-router-dom';

export const HomePage = (): JSX.Element => {
    return (
        <main
            className="container py-4"
            data-testid="home"
        >
            <Link
                to="styleguide"
                className="inline-block pt-2"
            >
                Styleguide
            </Link>
        </main>
    );
};

export default HomePage;