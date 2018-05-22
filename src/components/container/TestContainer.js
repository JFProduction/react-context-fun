import React, { Component } from 'react'
import InputRef from '../presentation/InputRef'
import TestPres from '../presentation/TestPres'

export default class TestContainer extends Component {
    constructor() {
        super()

        this.state = {
            name: ''
        }

        this.usernameRef = React.createRef()
    }

    changeUsername = () => {
        this.setState({
            name: this.usernameRef.current.value
        })
    }

    render() {
        let { name } = this.state
        return (
            <div>
                <InputRef ref={ this.usernameRef }
                    type="text"
                    onChange={ () => this.changeUsername() } />
                <TestPres name={ name } />
            </div>
        )
    }
}