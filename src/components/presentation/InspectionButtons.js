import React from 'react'
import PropTypes from 'prop-types'

const InspectionButtons = ({ btnClick }) => {
    return (
        <div style={{ height: 600, width: 300, background: "transparent" }}>
            <button
                title="View Front Inspections"
                id="Front"
                className="inspection-btn"
                style={{
                    position: "absolute",
                    left: 23 + "%",
                    marginTop: 50
                }}
                onClick={() => btnClick("Front")}
            >+</button>
            <button
                title="View Front Driver Inspections"
                id="FrontDriver"
                className="inspection-btn"
                style={{
                    position: "absolute",
                    left: 11 + "%",
                    marginTop: 200
                }}
                onClick={() => btnClick("FrontDriver")}
            >+</button>
            <button
                title="View Front Passenger Inspections"
                id="FrontPassenger"
                className="inspection-btn"
                style={{
                    position: "absolute",
                    left: 34 + "%",
                    marginTop: 200
                }}
                onClick={() => btnClick("FrontPassenger")}
            >+</button>
            <button
                title="View Roof Inspections"
                id="Roof"
                className="inspection-btn"
                style={{
                    position: "absolute",
                    left: 23 + "%",
                    marginTop: 340
                }}
                onClick={() => btnClick("Roof")}
            >+</button>
            <button
                title="View Rear Driver Inspections"
                id="RearDriver"
                className="inspection-btn"
                style={{
                    position: "absolute",
                    left: 10 + "%",
                    marginTop: 340
                }}
                onClick={() => btnClick("RearDriver")}
            >+</button>
            <button
                title="View Rear Passenger Inspections"
                id="RearPassenger"
                className="inspection-btn"
                style={{
                    position: "absolute",
                    left: 36 + "%",
                    marginTop: 340
                }}
                onClick={() => btnClick("RearPassenger")}
            >+</button>
            <button
                title="View Rear Inspections"
                id="Rear"
                className="inspection-btn"
                style={{
                    position: "absolute",
                    left: 23 + "%",
                    marginTop: 540
                }}
                onClick={() => btnClick("Rear")}
            >+</button>
        </div>
    )
}

InspectionButtons.propTypes = {
    btnClick: PropTypes.func.isRequired
}

export default InspectionButtons