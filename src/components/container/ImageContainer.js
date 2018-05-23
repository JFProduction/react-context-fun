import React, { Component } from 'react'
import ButtonsPres from '../presentation/ButtonsPres'
import View from '../presentation/View'
// import APIManager from '../../utils/APIManager'

export default class ImageContainer extends Component {
    constructor() {
        super()

        this.state = {
            view: '',
            carView: {},
            prompts: {},
            loading: false
        }

        this.btnClick.bind(this)
    }

    componentDidMount() {
        let inspections = {}
        let carView = {}
        this.setState({
            loading: true
        })

        let url = "http://my-url-here"
        fetch(`${url}`)
            .then(resp => resp.json())
            .then(resp => {
                resp.inspections.forEach(info => {
                    let inspData = JSON.parse(info.inspectionData)
                    inspections[info.inspectionType] = inspData
                })
                
                // inspType 
                // 1 -> preInpsection
                // 2 -> postInspection
                Object.keys(inspections).forEach(inspType => {
                    // converting inspType to int
                    inspType = parseInt(inspType, 10)
                    inspections[inspType].forEach(area => {
                        area.Area = resp.areas[area.Area]
                        
                        if (!carView.hasOwnProperty(area.Area.name)) {
                            let inspectionData = {}
                            inspectionData[inspType] = area
                            carView[area.Area.name] = inspectionData
                            
                        } else {
                            carView[area.Area.name][inspType] = area
                        }
                    })
                })

                this.setState({
                    loading: false,
                    carView,
                    prompts: resp.prompts
                })
            })
    }

    btnClick(id) {
        this.setState({
            view: id
        })
    }

    render() {
        let { carView, view, prompts, loading } = this.state

        return (
            loading
                ? <div>loading...</div>
                : <div className="row">
                    <div className="col-md-4">
                        <ButtonsPres btnClick={ id => { this.btnClick(id) }} />
                    </div>
                    <div className="col-md-8">
                        {
                            view !== "" && carView.hasOwnProperty(view)
                                ? <View carInfo={ carView[view] }
                                    prompts={ prompts } />
                                : null
                        }
                    </div>
                </div>
        )
    }
}