import React from 'react'

const InputRef = React.forwardRef((props, ref) => {
    // ref comes from the parent, and can be used there
    return (
        <div style={{ margin: 10 }}>
            <input className="form-control"
                ref={ ref }
                { ...props } />
        </div>
    )
})

export default InputRef