import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

// Route Imports
import NotFound from '../routes/NotFound/NotFound';
import Home from '../routes/Home/Home';
import Styleguide from '../routes/Styleguide/Styleguide';

// Component Imports
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export function _App(): JSX.Element {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/styleguide" component={Styleguide} />
                <Route component={NotFound} />
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}

export default hot(_App);
