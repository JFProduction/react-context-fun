import React from 'react'

const View = ({ carInfo }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h1>Viewing { carInfo.header }</h1>
            </div>
            <div className="panel-body">
                <strong>quick info:</strong> { carInfo.another }
            </div>
        </div>
    )
}

export default View