import React from "react";
import { Component } from "react"

// class Komponenta extends Component {
//     constructor (props) {
//         super(props);
//     }
//     render() {
//         return (
//             <>
//             <h1>Komponenta</h1>
//             <h2>{this.props.title}</h2>
//             </>
//         )
//     }
// }

function Komponenta(props) {
    return (
        <>
         <h1>Komponenta</h1>
         <h2>{props.title}</h2>
        </>
        )
    }


export default Komponenta