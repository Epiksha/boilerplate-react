import React, { Component } from 'react';
import '../scss/general.scss';

import Example from '../components/Example/Example';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Example />
            </div>
        );
    }
}

export default App;