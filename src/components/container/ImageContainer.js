import React, { Component } from 'react'
import ButtonsPres from '../presentation/ButtonsPres'
import View from '../presentation/View'

export default class ImageContainer extends Component {
    constructor() {
        super()

        this.state = {
            view: ''
        }

        this.btnClick.bind(this)
        this.renderView.bind(this)
    }

    btnClick(id) {
        this.setState({
            view: id
        })
    }

    renderView() {
        let showView

        switch (this.state.view) {
            case "front": 
                showView = <View carInfo={{
                    header: this.state.view,
                    another: "something is wrong up here"
                }} />
                break
            case "front-driver":
                showView = <View carInfo={{
                    header: this.state.view,
                    another: "this looks fine..."
                }} />
                break
            case "front-passenger":
                showView = <View carInfo={{
                    header: this.state.view,
                    another: "this looks ok, minor damages here"
                }} />
                break
            case "rear-driver":
                showView = <View carInfo={{
                    header: this.state.view,
                    another: "everything looks great!"
                }} />
                break
            case "rear-passenger":
                showView = <View carInfo={{
                    header: this.state.view,
                    another: "nothing to see here"
                }} />
                break
            default:
                showView = null
                break
        }

        return showView
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <ButtonsPres btnClick={ id => { this.btnClick(id) }} />
                </div>
                <div className="col-md-8">
                {
                    this.renderView()
                }
                </div>
            </div>
        )
    }
}