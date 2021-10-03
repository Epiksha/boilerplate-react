import { Link } from 'react-router-dom';

export const HomePage = (): JSX.Element => (
    <div className="container py-4">
        <Link to="/styleguide">Styleguide</Link>
    </div>
);

export default HomePage;