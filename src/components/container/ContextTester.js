import React, { Component } from 'react';
import Tester from './Tester';
import MyContext from '../../MyContext';

export default class ContextTester extends Component { 
    constructor(props) {
        super(props);

        this.changeName = e => {
            this.setState({
                name: e.target.value
            })
        }

        this.state = {
            name: "jimmyfargo",
            changeName: this.changeName
        }
    }
        
    render() {
        return (
            <MyContext.Provider value={ this.state }>
                <Tester />
            </MyContext.Provider>
        );
    }
}