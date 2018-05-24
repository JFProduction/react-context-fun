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
                    inspectionData 
                    ? inspectionData.map(info => {
                        return (
                            prompts[info.ChecklistItemId]
                                ? <li key={ info.ChecklistItemId }
                                    style={{ listStyleType: "none" }}>
                                    <div className="col-lg-8">
                                        <strong>
                                            { prompts[info.ChecklistItemId].prompt }: 
                                        </strong>
                                    </div>
                                    <div className="col-lg-4">{ info.Value || "N/A" }</div>
                                </li>
                                : null
                        )
                    })
                    : null
                }
                </ul>
            </div>
        </div>
    )
}

export default Inspection