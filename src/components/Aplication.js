import React, { Component } from 'react';
import AplicationForm from "./AplicationForm";

export default class Aplication extends Component {
    state = {
        emptyApplication: []
    }
    render() {
        return (
            <div>
                <p>This is aplication form</p>
                <AplicationForm />
            </div>
        )
    }
}
