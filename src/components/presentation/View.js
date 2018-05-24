import React from 'react'
import Inspection from './Inspection'
import PropTypes from 'prop-types'

const View = ({ carInfo, prompts }) => {
    let pre = carInfo[1],
        post = carInfo[2]
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h1>{ pre.Area.name } Inspection</h1>
            </div>
            <div className="panel-body">
                <Inspection header="Pre"
                    inspectionData={ pre.Checks }
                    prompts={ prompts } />
                <Inspection header="Post"
                    inspectionData={ post.Checks }
                    prompts={ prompts } />
            </div>
        </div>
    )
}

View.propTypes = {
    carInfo: PropTypes.object.isRequired,
    prompts: PropTypes.array.isRequired
}

export default View