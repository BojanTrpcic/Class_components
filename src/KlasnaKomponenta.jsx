import React from "react";
import { Component } from "react"

class Komponenta2 extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <>
            <h1>Komponenta2</h1>
            <h2>{this.props.title}</h2>
            </>
        )
    }
}

export default Komponenta2