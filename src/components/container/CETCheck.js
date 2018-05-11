import React, { Component } from 'react'
import APIManager from '../../utils/APIManager'
import MakeChart from '../presentation/MakeChart'

export default class CETCheck extends Component {
    constructor() {
        super()

        this.state = {
            getDataInterval: null,
            chartData: {},
            processedData: [],
            notProcessedData: [],
            inProgressData: [],
            labels: []
        }
    }

    componentDidMount() {
        this.setState({
            getDataInterval: setInterval(() => {
                APIManager.get("http://localhost:4000/getInfo", null, (err, resp) => {
                    if (err) {
                        alert(err)
                    }
        
                    if (resp.status === 200) {
                        let processedData = Object.assign([], this.state.processedData)
                        let notProcessedData = Object.assign([], this.state.notProcessedData)
                        let inProgressData = Object.assign([], this.state.inProgressData)
                        let labels = Object.assign([], this.state.labels)
                        
                        let tmpProcessed = resp.data.filter(info => { return info.eocStatus.toLowerCase() === "processed" }).map(info => { return info.count })
                        if (tmpProcessed.length > 0) {
                            processedData.push(tmpProcessed)
                        } else {
                            processedData.push(0)
                        }

                        let tmpNotProcessed = resp.data.filter(info => { return info.eocStatus.toLowerCase() === "not_processed" }).map(info => { return info.count })
                        if (tmpNotProcessed.length > 0) {
                            notProcessedData.push(tmpNotProcessed)
                        } else {
                            notProcessedData.push(0)
                        }

                        let tmpInProgress = resp.data.filter(info => { return info.eocStatus.toLowerCase() === "in_progress" }).map(info => { return info.count })
                        if (tmpInProgress.length > 0) {
                            inProgressData.push(tmpInProgress)
                        } else {
                            inProgressData.push(0)
                        }
    
                        labels.push(resp.data[0].time)

                        this.setState({
                            chartData: {
                                labels: labels.slice(labels.length - 10, labels.length - 1),
                                datasets: [{
                                    label: 'processed',
                                    fillColor: "rgba(0,238,76,0.2)",
                                    strokeColor: "rgba(0,238,76,1)",
                                    pointColor: "rgba(0,238,76,1)",
                                    pointStrokeColor: "#00EE4C",
                                    pointHighlightFill: "#00EE4C",
                                    pointHighlightStroke: "rgba(0,238,76,1)",
                                    data: processedData.slice(processedData.length - 10, processedData.length - 1)
                                }, {
                                    label: 'not processed',
                                    fillColor: "rgba(255,82,82,0.2)",
                                    strokeColor: "rgba(255,82,82,1)",
                                    pointColor: "rgba(255,82,82,1)",
                                    pointStrokeColor: "#ff5252",
                                    pointHighlightFill: "#ff5252",
                                    pointHighlightStroke: "rgba(255,82,82,1)",
                                    data: notProcessedData.slice(notProcessedData.length - 10, notProcessedData.length - 1)
                                }, {
                                    label: 'in progress',
                                    fillColor: "rgba(255,180,0,0.2)",
                                    strokeColor: "rgba(255,180,0,1)",
                                    pointColor: "rgba(255,180,0,1)",
                                    pointStrokeColor: "#FFB400",
                                    pointHighlightFill: "#FFB400",
                                    pointHighlightStroke: "rgba(255,180,0,1)",
                                    data: inProgressData.slice(inProgressData.length - 10, inProgressData.length - 1)
                                }]
                            },
                            processedData,
                            notProcessedData,
                            inProgressData,
                            labels
                        })
                    }
                })
            }, 2000)
        })
    }

    componentWillUnmount() {
        let getDataInterval = Object.assign({}, this.state.getDataInterval)
        clearInterval(getDataInterval)

        this.setState({
            getDataInterval: null
        })
    }

    render() {
        return (
            <div style={{ marginTop: 30, padding: 30 }}>
                <MakeChart chartData={ this.state.chartData } />
            </div>
        )
    }
}