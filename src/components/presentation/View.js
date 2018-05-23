import React from 'react'
import Inspection from './Inspection'

const View = ({ carInfo, prompts }) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h1>Viewing { carInfo[1].Area.name }</h1>
            </div>
            <div className="panel-body">
                <Inspection header="Pre Inspection"
                    inspectionData={ carInfo[1].Checks }
                    prompts={ prompts } />
                <Inspection header="Post Inspection"
                    inspectionData={ carInfo[2].Checks }
                    prompts={ prompts } />
            </div>
        </div>
    )
}

export default View