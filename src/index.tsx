import ReactDOM from 'react-dom' ;
import { Provider } from 'react-redux';

import App from './App/App';
import store from './store';
import './scss/entry.scss';

// Imports SVGs so webpack loaders generate spritesheet
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

document.body.classList.remove('nojs');
