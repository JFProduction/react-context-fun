import React from 'react'
import { Line } from "react-chartjs-2"

const MakeChart = ({ chartData }) => {
    let options = {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    return (
        <Line data={ chartData } 
            options={ options }
            width="600" height="220" />
    )
}

export default MakeChart