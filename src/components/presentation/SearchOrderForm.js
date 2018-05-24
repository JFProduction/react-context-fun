import React from 'react'
import InputRef from './InputRef';

const SearchOrderForm = ({ orderIdRef, searchForInspection }) => {
    return (
        <div className="input-group" style={{ marginBottom: 20 }}>
            <InputRef
                className="form-control"
                ref={orderIdRef}
                placeholder="Enter Order ID"
                type="text"
            />
            <span className="input-group-btn">
                <button
                    className="btn btn-default"
                    onClick={() => searchForInspection()}
                >
                    Search
            </button>
            </span>
        </div>
    )
}

export default SearchOrderForm