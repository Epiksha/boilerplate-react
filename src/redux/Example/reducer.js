import CHANGE_TEXT from './actions';

const initialState = {
    text: 'Connected to store',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        default:
            return state;
    }
};
