import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import changeText from '../../redux/Example/creators';

const Example = ({ text, actions }) => {
    const fireTextChange = () => {
        const newText = document.querySelector('.example__input').value;

        actions.changeText(newText);
    };

    return (
        <section className="example">
            <input type="text" className="example__input" />
            <button type="button" className="example__button" onClick={fireTextChange}>Change Text</button>

            <div className="example__container">
                <h1 className="example__text">{`Redux: ${text}`}</h1>
            </div>
        </section>
    );
};

// Prop Validation
Example.propTypes = {
    text: PropTypes.string,
    actions: PropTypes.shape({ changeText: PropTypes.func }).isRequired,
};

Example.defaultProps = {
    text: 'Not connected to store',
};

// Store
const mapStateToProps = (state) => ({
    ...state.Example,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ changeText }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
