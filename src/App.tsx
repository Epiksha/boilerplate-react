import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

// Route Imports
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Styleguide from './routes/Styleguide';

// Component Imports
import Header from './components/Header';

export const App = hot(_App);

export function _App(): JSX.Element {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/styleguide" component={Styleguide} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}