import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import changeText from '../../redux/Example/creators';

const Example = ({ text }) => (
    <section className="example">
        <input type="text" className="example__input" />
        <button type="button" className="example__button">Change Text</button>

        <div className="example__container">
            <h1 className="example__text">{text}</h1>
        </div>
    </section>
);

// Prop Validation
Example.propTypes = {
    text: PropTypes.string,
};

Example.defaultProps = {
    text: 'Not connected to state',
};

// Store
const mapStateToProps = (state) => ({
    ...state.Example,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ changeText }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
