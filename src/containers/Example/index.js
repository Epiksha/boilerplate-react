import React, { Component } from 'react';

import ExampleSlide from './ExampleSlide';

class Example extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Hello',
        };
    }

    render() {
        const { title } = this.state;
        return (
            <ExampleSlide title={title} />
        );
    }
}

export default Example;
