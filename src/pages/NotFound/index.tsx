import React from "react";

export const NotFoundPage: React.FC = () => {
    return (
        <main className="notFound">
            <div className="notFound__content">
                <h1 className="notFound__title">Oops!</h1>

                <h2 className="notFound__subtitle">The page you are looking for does not exist.</h2>
            </div>
        </main>
    );
};

export default NotFoundPage;
