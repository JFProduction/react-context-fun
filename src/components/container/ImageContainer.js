import React, { Component } from 'react'
import ButtonsPres from '../presentation/ButtonsPres'
import View from '../presentation/View'

export default class ImageContainer extends Component {
    constructor() {
        super()

        this.state = {
            view: '',
            carView: {}
        }

        this.btnClick.bind(this)
    }

    componentDidMount() {
        // api call to collect car information
        this.setState({
            carInfo: {
                front: {header: "front", another: "This is something else"},
                frontDriver: {header: "front driver", another: "This is something else"},
                frontPassenger: {header: "front passenger", another: "This is something else"},
                rearDriver: {header: "rear driver", another: "This is something else"},
                rearPassenger: {header: "rear passenger", another: "This is something else"},
            }
        })
        
    }

    btnClick(id) {
        this.setState({
            view: id
        })
    }

    render() {
        let { carInfo, view } = this.state

        return (
            <div className="row">
                <div className="col-md-4">
                    <ButtonsPres btnClick={ id => { this.btnClick(id) }} />
                </div>
                <div className="col-md-8">
                    {
                        view !== "" 
                            ? <View carInfo={ carInfo[view] } />
                            : null
                    }
                </div>
            </div>
        )
    }
}