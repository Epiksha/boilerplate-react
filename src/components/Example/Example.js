import React, { Component } from "react";

class Example extends Component {
    constructor() {
        super();

        this.state = {
            title: "Hello"
        };
    }

    render() {
        return (
            <form>
                <h1>{this.state.title}</h1>
            </form>
        );
    }
};

export default Example;