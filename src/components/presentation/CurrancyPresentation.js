import React from 'react'

const CurrancyPresentation = ({ item }) => {
    return (
        <div className="col-md-3">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{ item.name }</h3>
                </div>
                <div className="panel-body">
                    <div>Price: {
                        new Intl.NumberFormat('en-EN', { 
                            style: 'currency', 
                            currency: 'USD' 
                        }).format(item.price_usd)
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default CurrancyPresentation