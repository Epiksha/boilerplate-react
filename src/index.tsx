import ReactDOM from 'react-dom' ;
import { Provider } from 'react-redux';
import { getContext, resetContext } from 'kea';
import App from './App/App';

import './scss/entry.scss';

// Imports SVGs so webpack loaders generate spritesheet
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

resetContext({
    createStore: {},
    plugins: [],
})

ReactDOM.render(
    <Provider store={getContext().store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

document.body.classList.remove('nojs');
