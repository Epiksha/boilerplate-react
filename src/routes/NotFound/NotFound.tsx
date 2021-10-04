import { Link } from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => (
    <main
        className="notFound"
        data-testid="notFound"
    >
        <div className="notFound__content">
            <h1 className="notFound__title">Oops!</h1>

            <h2 className="notFound__subtitle">The page you are looking for does not exist.</h2>

            <Link to="/" className="link notFound__link">Return to Home</Link>
        </div>
    </main>
);

export default NotFoundPage;
