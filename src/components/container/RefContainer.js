import React, { Component } from 'react'
import ForwardedRefPresentation from '../presentation/ForwardedRefPresentation'

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
                <ForwardedRefPresentation ref={ this.userInputRef }
                    onChange={ () => this.updateUserInputDeep() } />
            </div>
        )
    }
}