import React from 'react'
import { Line } from "react-chartjs-2"

const MakeChart = ({ chartData }) => {
    return (
        <Line data={ chartData } width="600" height="250" />
    )
}

export default MakeChart