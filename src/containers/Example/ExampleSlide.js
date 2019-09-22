import React from 'react';
import PropTypes from 'prop-types';

const ExampleSlide = ({ title }) => (
    <form>
        <h1>{title}</h1>
    </form>
);

ExampleSlide.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ExampleSlide;
