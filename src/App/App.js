import React, { Component } from 'react';
import '../scss/general.scss';

import Example from '../components/Example/Example';

class App extends Component {
    constructor() {
        super();

        this.state = {
            title: 'Hello',
        };
    }

    render() {
        const { title } = this.state;
        return (
            <div className="App">
                <Example title={title} />
            </div>
        );
    }
}

export default App;
