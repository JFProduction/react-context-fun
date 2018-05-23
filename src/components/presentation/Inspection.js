import React from 'react'

const Inspection = ({ header, inspectionData, prompts }) => {
    return (
        <div className="col-lg-6">
            <div>
                <h3>{ header }</h3>
            </div>
            <div>
                <ul style={{ textAlign: "left" }} className="row">
                { 
                    inspectionData.map(info => {
                        return (
                            <li key={ info.ChecklistItemId }
                                style={{ listStyleType: "none" }}>
                                <div className="col-lg-6">
                                    <strong>
                                        { prompts[info.ChecklistItemId].prompt }: 
                                    </strong>
                                </div>
                                <div className="col-lg-6">{ info.Value }</div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Inspection