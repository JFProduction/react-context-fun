import React from 'react'

const ForwardedRefPresentation = React.forwardRef((props, ref) => {
    // ref comes from the parent, and can be used there
    return (
        <div>
            <input type="text"
                ref={ ref }
                { ...props } />
        </div>
    )
})

export default ForwardedRefPresentation