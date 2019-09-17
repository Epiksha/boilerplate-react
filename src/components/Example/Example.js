import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ title }) => (
    <form>
        <h1>{title}</h1>
    </form>
);

Example.propTypes = {
    title: PropTypes.string.isRequired,
};


export default Example;
