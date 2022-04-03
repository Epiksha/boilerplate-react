import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

// Route Imports
import NotFound from '../routes/NotFound';
import Home from '../routes/Home';
import Styleguide from '../routes/Styleguide';

export function _App(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/styleguide" component={Styleguide} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default hot(_App);
