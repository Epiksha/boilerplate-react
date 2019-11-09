import React from 'react';

import Example from '../components/Example/Example';

import ReactImg from '../assets/images/react.png';

const Home = () => (
    <main className="home">
        <img src={ReactImg} alt="React Logo" className="home__img" />
        <Example />
    </main>
);

export default Home;
