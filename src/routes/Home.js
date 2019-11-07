import React from 'react';
import { Link } from 'react-router-dom';

import ReactImg from '../assets/images/react.png';

const Home = () => (
    <main>
        <img src={ReactImg} alt="React Logo" />
        <h2>Home</h2>
        <Link to="/contact">Contact</Link>
    </main>
);

export default Home;
