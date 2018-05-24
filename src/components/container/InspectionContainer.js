import React, { Component } from 'react'
import CarImg from '../presentation/CarImg'
import InspectionButtons from '../presentation/InspectionButtons'
import View from '../presentation/View'
import SearchOrderForm from '../presentation/SearchOrderForm'

export default class InspectionContainer extends Component {
    constructor() {
        super()

        this.state = {
            carView: {},
            loading: false,
            promps: [],
            view: '',
            areas: [],
            orderId: ''
        }

        this.handleViewChange.bind(this)
        this.searchForInspection.bind(this)
        this.orderIdRef = React.createRef()
    }

    // WPDX003816
    searchForInspection(e) {
        // remove active class to all inspection buttons
        this.state.areas.forEach(({ name }) => {
            let elem = document.getElementById(name)
            if (elem) elem.classList.remove("active")
        })

        let inspections = {}
        let carView = Object.assign({}, this.state.carView)

        this.setState({
            loading: true
        })

        fetch(`http://localhost:8000/api/order/${this.orderIdRef.current.value}`)
            .then(resp => resp.json())
            .then(resp => {
                if (resp.inspections) {
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
                }

                this.setState({
                    loading: false,
                    carView,
                    view: "",
                    prompts: resp.prompts,
                    areas: resp.areas
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleViewChange(view) {
        // remove active class to all inspection buttons
        this.state.areas.forEach(({ name }) => {
            let elem = document.getElementById(name)
            if (elem) elem.classList.remove("active")
        })

        // add active class to inspection button that was clicked
        document.getElementById(view).classList.add("active")

        // update the state's view option
        this.setState({
            view
        })
    }

    render() {
        let { carView, view, prompts, loading } = this.state

        return (
            <div>
                <SearchOrderForm 
                    orderIdRef={ this.orderIdRef }
                    searchForInspection={ (e) => this.searchForInspection(e) }
                />
                {
                    loading ? <h3>loading...</h3>
                    :  <div>
                            <div className="col-lg-5">
                                <CarImg 
                                    styles={{
                                        marginTop: 380,
                                        marginLeft: 50,
                                        zIndex: -9999,
                                        transform: "rotate(270deg)"
                                    }}
                                    imgSrc="imgs/red-car-top-view-hi.png" 
                                />
                                <InspectionButtons
                                    btnClick={view => this.handleViewChange(view) } />
                            </div>
                            <div className="col-lg-7">
                            {
                                view !== "" && carView[view]
                                    ? <View carInfo={ carView[view] }
                                        prompts={ prompts } />
                                    : view !== "" && !carView[view]
                                        ? <h3>Nothing to inspect for { view }</h3>
                                        : <h3>Select a View</h3>
                            }
                            </div>
                        </div>
                }
            </div>
        )
    }
}