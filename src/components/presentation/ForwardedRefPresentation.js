import React from 'react'

const ForwardedRefPresentation = React.forwardRef((props, ref) => {
    // ref comes from the parent, and can be used there
    return (
        <div style={{ marginBottom: 10 }}>
            <input className="form-control" 
                type="text"
                ref={ ref }
                { ...props } 
            />
        </div>
    )
})

export default ForwardedRefPresentation