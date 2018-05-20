import React, { Component } from 'react'
import InputRef from '../presentation/InputRef'

export default class RefContainer extends Component {
    constructor() {
        super()
        
        this.state = {
            userInput: 'jimmyfargo'
        }

        this.userInputRef = React.createRef()
    }
    
    componentDidMount() {
        // sets the focus on the user input
        this.userInputRef.current.focus()
    }

    updateUserInputDeep() {
        this.setState({
            userInput: this.userInputRef.current.value
        })
    }

    render() {
        let { userInput } = this.state

        return (
            <div style={{ marginTop: 10 }}>
                <p>Hello, { userInput } from a ref object</p>
                <InputRef ref={ this.userInputRef }
                    placeHolder="type something here"
                    onChange={ () => this.updateUserInputDeep() } />
            </div>
        )
    }
}