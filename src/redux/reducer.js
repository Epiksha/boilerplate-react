import { combineReducers } from 'redux';

import Example from './Example/reducer';

const appReducer = combineReducers({
    Example,
});

export default appReducer;
