import CHANGE_TEXT from './actions';

const initialState = {
    text: 'Connected to state',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                action,
            };
        default:
            return state;
    }
};
