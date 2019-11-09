import actions from './actions';

export default (newText) => ({
    type: actions.CHANGE_TEXT, payload: newText,
});
