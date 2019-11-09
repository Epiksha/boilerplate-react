import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import appReducer from './reducer';

const store = (initialState) => (
    createStore(
        appReducer,
        initialState,
        compose(applyMiddleware(ReduxThunk)),
    )
);

export default store;
