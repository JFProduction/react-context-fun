import React from 'react'
import { Line } from "react-chartjs-2"
import PropTypes from 'prop-types'

const MakeChart = ({ chartData }) => {
    return (
        <Line data={ chartData } width="600" height="250" />
    )
}

MakeChart.propTypes = {
    chartData: PropTypes.object.isRequired
}

export default MakeChart