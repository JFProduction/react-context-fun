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
            labels: [],
            refresh: true
        }
    }

    getData() {
        APIManager.get("http://localhost:4000/getInfo", null, (err, resp) => {
            if (err) {
                alert(err)
            }

            if (resp.status === 200) {
                let processedData = Object.assign([], this.state.processedData)
                let notProcessedData = Object.assign([], this.state.notProcessedData)
                let inProgressData = Object.assign([], this.state.inProgressData)
                let labels = Object.assign([], this.state.labels)
                
                let tmpProcessed = resp.data.filter(info => { 
                    return info.eocStatus.toLowerCase() === "processed" 
                }).map(info => { return info.count })
                if (tmpProcessed.length > 0) {
                    processedData.push(tmpProcessed)
                } else {
                    processedData.push(0)
                }

                let tmpNotProcessed = resp.data.filter(info => { 
                    return info.eocStatus.toLowerCase() === "not_processed" 
                }).map(info => { return info.count })
                if (tmpNotProcessed.length > 0) {
                    notProcessedData.push(tmpNotProcessed)
                } else {
                    notProcessedData.push(0)
                }

                let tmpInProgress = resp.data.filter(info => { 
                    return info.eocStatus.toLowerCase() === "in_progress" 
                }).map(info => { return info.count })
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
                            backgroundColor: "rgba(66,133,244,0.5)",
                            borderColor: "rgba(66,133,244,1)",
                            pointColor: "rgba(66,133,244,1)",
                            data: processedData.slice(processedData.length - 10, processedData.length - 1)
                        }, {
                            label: 'not processed',
                            backgroundColor: "rgba(220,220,220,0.2)",
                            borderColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            data: notProcessedData.slice(notProcessedData.length - 10, notProcessedData.length - 1)
                        }, {
                            label: 'in progress',
                            backgroundColor: "rgba(255,180,0,0.2)",
                            borderColor: "rgba(255,180,0,1)",
                            pointColor: "rgba(255,180,0,1)",
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
    }

    componentDidMount() {
        this.setState({
            getDataInterval: setInterval(() => {
                this.getData()
            }, 2000)
        })
    }

    componentWillUnmount() {
        this.stopRefresh()
    }

    stopRefresh() {
        let { getDataInterval, refresh } = this.state

        if (refresh) {
            clearInterval(getDataInterval)
            getDataInterval = null
        } else {
            getDataInterval = setInterval(() => {
                this.getData()
            }, 2000)
        }

        this.setState({
            getDataInterval,
            refresh: !this.state.refresh
        })
    }

    render() {
        return (
            <div className="container">
                <button onClick={ () => this.stopRefresh() }
                    style={this.state.refresh ? {background: '#4285f4', color: '#fff'} : null}>
                { 
                    this.state.refresh ? "stop refresh" : "auto refresh" 
                }
                </button>
                <div>
                    <MakeChart chartData={ this.state.chartData } />
                </div>
            </div>
        )
    }
}