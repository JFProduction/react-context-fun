import React from 'react'

const CurrancyPresentation = ({ item }) => {
    return (
        <div className="col-md-3">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { item.name }
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-12">
                        {
                            new Intl.NumberFormat('en-EN', { 
                                style: 'currency', 
                                currency: 'USD' 
                            }).format(item.price_usd)
                        }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            { item.percent_change_1h }
                        </div>
                        <div className="col-sm-4">
                            { item.percent_change_24h }
                        </div>
                        <div className="col-sm-4">
                            { item.percent_change_7d }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrancyPresentation