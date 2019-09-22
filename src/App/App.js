import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../routes/Home';
import Contact from '../routes/Contact';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../scss/general.scss';

const App = () => (
    <>
        <Header />

        <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route path="/" component={Home} />
        </Switch>

        <Footer />
    </>
);

export default App;
